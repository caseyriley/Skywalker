from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from models import db, Like


likes = Blueprint('likes', __name__)


# create/destroy new like entry
@likes.route('/', methods=["POST", "DELETE"])
@jwt_required
def like_behavior():
    data = request.get_json()
    if request.method == "POST":
        try:
            like = Like(
                user_id=data['userId'],
                tweet_id=data['tweetId']
            )
            db.session.add(like)
            db.session.commit()
            return jsonify(message="like creation success"), 208
        except Exception:
            return jsonify(message="like creation failed"), 410
    elif request.method == "DELETE":
        try:
            like = Like.query.filter(Like.user_id==int(data['userId']), \
                Like.tweet_id==int(data['tweetId'])).first()
            db.session.delete(like)
            db.session.commit()
            return jsonify(message="like destruction success"), 209
        except Exception:
            return jsonify(message="like destruction failed"), 411


# get count of all likes for one tweet
@likes.route('/<id>')
@jwt_required
def likes_by_id(id):
    likes = Like.query.filter(Like.tweet_id==id).count()
    return jsonify(count=likes)


# check if user liked a tweet
@likes.route('/<user>/<tweet>')
@jwt_required
def likes_of_user(user, tweet):
    print(f'user id: {user}, tweet id: {tweet}')
    like = Like.query.filter(Like.user_id==user, \
        Like.tweet_id==tweet).first()
    print(f'Like ---> {like}')
    return jsonify(like=like), 220

