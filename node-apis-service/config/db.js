const mongoose = require('mongoose');

const connectDB = async () => {
   // For nodemon restarts
   process.once('SIGUSR2', () => {
      mongoose.connection
         .close()
         .then(() => {
            console.log('@process.on(`SIGUSR2`)');
            process.kill(process.pid, 'SIGUSR2');
         })
         .catch(err => {
            console.error(
               '@process.on(`SIGUSR2`) [error: %s]',
               err.message,
            );
            process.kill(process.pid, 'SIGUSR2');
         });
   });

   // For app termination to make sure that the connection is closed
   process.on('SIGINT', () => {
      mongoose.connection
         .close()
         .then(() => {
            console.log(
               '@process.on(`SIGINT`) termination (SIGINT)'
            );
            process.exit(0);
         })
         .catch(err => {
            console.error('@process.on(`SIGINT`) [error: %s]', err.message);
            process.exit(0);
         });
   });

   try {
      // Connect mongo DB
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });

      console.log('Successfully connected to mongoDB');
   } catch (err) {
      console.error(
         '@mongoose.connect() failed connect to mongoDB [error: %s]',
         err.message,
      );
      mongoose.connection
         .close()
         .then(() => {
            process.exit(1);
         })
         .catch(() => {
            process.exit(1);
         });
   }
};

module.exports = connectDB;