const router = require('express').Router();
const apiRouters = require('express').Router();
const usersRouter = require('./user.route');
const songsRouter = require('./song.route');

// Routes
router.use('/api/v1', apiRouters);
apiRouters.use('/users', usersRouter);
apiRouters.use('/songs', songsRouter);

module.exports = router;