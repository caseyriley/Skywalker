from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from models import db, Like


likes = Blueprint('likes', __name__)

# Get count of all likes for one tweet
@likes.route('/<id>')
@jwt_required
def likes_by_id(id):
    likes = Like.query.filter(Like.liked_tweet==id).count()
    return jsonify(count=likes)


