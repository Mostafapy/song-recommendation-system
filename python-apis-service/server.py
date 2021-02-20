import os
import json
from flask import Flask, request, jsonify, Response, flash
from werkzeug.utils import secure_filename
from tinytag import TinyTag 
from config import PORT, UPLOADPATH

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

       result = TinyTag.get(path)

       os.remove(path)

       return jsonify({
           "success": True,
           "msg": 'selected file',
           "data": json.loads(str(result)),
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

