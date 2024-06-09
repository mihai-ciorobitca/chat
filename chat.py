from flask_socketio import SocketIO, emit
from flask import Flask, render_template

app = Flask(__name__)

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def test_connect():
    print('Client connected')

@socketio.on('message')
def handle_message(message):
    print('message received:'+ message)
    emit('message', {'message': message}, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True)
