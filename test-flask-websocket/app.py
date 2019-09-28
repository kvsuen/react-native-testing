from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app,  cors_allowed_origins='http://localhost:3000')

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

@socketio.on('connect')
def test_connect():
    print('client connected')

@socketio.on('hello')
def handle_data(data):
    print('received data: ' + data)
    socketio.emit('world', 'hello')

@socketio.on('testing')
def handle_data2(data):
    print('received data: ' + data)
    socketio.emit('my response', data, broadcast=False)

if __name__ == '__main__':
    socketio.run(app)