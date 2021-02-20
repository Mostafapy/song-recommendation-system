import os
# 10 GENRES USED FOR CLASSIFICATION
GENRES      = [ 'blues',
                'classical',
                'country',
                'disco',
                'hiphop',
                'jazz',
                'metal',
                'pop',
                'reggae',
                'rock'  ]

# DEFINE PATHS
DATAPATH       =   os.getenv("DATA_PATH")
RAWDATAPATH    =   os.getenv("RAW_DATAPATH")
SETDATAPATH    =   os.getenv("SET_DATAPATH")
MODELPATH      =   os.getenv("MODEL_PATH")
UPLOADPATH     =   os.getenv("UPLOAD_PATH")

# PORT
PORT           =   os.getenv("PORT")