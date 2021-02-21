import os
import json
from flask import Flask, request, jsonify, Response, flash
from werkzeug.utils import secure_filename
from config import PORT, UPLOADPATH
from get_genre import get_genre
# new App
app = Flask(__name__)

@app.route("/api/v1/sound-analyzer", methods=["POST"])
def sound_analyzer():
    try:
       file = request.files['file']
       # if user does not select file, browser also
       # submit an empty part without filename
       if file.filename == '':
           flash('No selected file')
           return jsonify({
               "success": False,
               "msg": 'No selected file',
               "data": None,
            })
       filename = secure_filename(file.filename)
       path = os.path.join(UPLOADPATH, filename)
       file.save(path)
       result = get_genre(path)
       # get maximum percent of type of genre 
       all_values = result.values()
       max_value = max(all_values)
       
       # get genre of the max value percent
       genre = list(result.keys())[list(result.values()).index(max_value)]

       # remove the uploaded file
       os.remove(path)

       return jsonify({
           "success": True,
           "msg": 'Successfully detect the genre of your music file',
           "data": genre,
       })

    except Exception as _err:
        return jsonify({
            "success": False,
            "msg": _err,
            "data": None,
        })

# Port
port = int(PORT)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port, debug=True)

