from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

@app.route('/')
def serve_home():
    return send_from_directory('.', 'index.html')

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name', '')
    return jsonify({'message': f'Hello {name}'})

if __name__ == '__main__':
    app.run(debug=True)
