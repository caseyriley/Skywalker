from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    get_jwt_identity,
    get_raw_jwt,
    verify_jwt_in_request)  # noqa
from flask_cors import CORS


from .config import Config
from .models import db
from .users import user
from .seed import seed
from .tweets import tweets
from .likes import likes
from .auth import auth
from .replies import replies
from .gallery import gallery


app = Flask(__name__, static_url_path='')
app.config.from_object(Config)
CORS(app)

app.register_blueprint(user, url_prefix='/api/users')
app.register_blueprint(seed, url_prefix='/api/seed')
app.register_blueprint(tweets, url_prefix='/api/tweets')
app.register_blueprint(likes, url_prefix='/api/likes')
app.register_blueprint(auth, url_prefix='/api/auth')
app.register_blueprint(replies, url_prefix='/api/replies')
app.register_blueprint(gallery, url_prefix='/api/gallery')

db.init_app(app)
jwt = JWTManager(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path>')
def react_root(path):
    return app.send_static_file('index.html')


@app.route('/api', methods=['GET'])
def api():
    return jsonify(message='Successful API ping'), 200


@app.route('/api/favicon.ico')
def fav():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico')
