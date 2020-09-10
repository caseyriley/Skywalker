from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    get_jwt_identity,
    get_raw_jwt,
    verify_jwt_in_request)  # noqa
from flask_cors import CORS


from config import Config
from models import db
from users import user
from seed import seed
from tweets import tweets
from likes import likes
from auth import auth
from replies import replies


app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

app.register_blueprint(user, url_prefix='/api/users')
app.register_blueprint(seed, url_prefix='/api/seed')
app.register_blueprint(tweets, url_prefix='/api/tweets')
app.register_blueprint(likes, url_prefix='/api/likes')
app.register_blueprint(auth, url_prefix='/api/auth')
app.register_blueprint(replies, url_prefix='/api/replies')

db.init_app(app)
jwt = JWTManager(app)


@app.route('/')
def slash():
    return jsonify(Notice='Please use /api route to access the api'), 200


@app.route('/api', methods=['GET'])
def api():
    return jsonify(message='Successful API ping'), 200
