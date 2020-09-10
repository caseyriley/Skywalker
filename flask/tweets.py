from flask import Blueprint, jsonify, request
from sqlalchemy.orm import subqueryload, joinedload
from models import db, Tweet
import requests
import json
from flask_jwt_extended  import jwt_required

from flask_cors import CORS

tweets = Blueprint('tweets', __name__)

# Get one tweet with its replies
@tweets.route("/tweet/<id>", methods=["GET"])
@jwt_required
def get_a_tweet(id):

  model_tweet = Tweet.query.filter(Tweet.id==id).first()
  tweet = model_tweet.to_dict()
  tweet["user"] = model_tweet.user.to_safe_object()

  replies = []
  for reply in model_tweet.replies:
    reply_object = []
    print("----->", reply.users)
    # reply.user_id.to_safe_object()
    reply_object.append(reply.to_dict())
    reply_object.append(reply.users.to_safe_object())
    replies.append(reply_object)
  tweet["replies"] = replies

  return jsonify(tweet)


# Get all tweets for one user
@tweets.route("/user/<id>", methods=["GET"])
def get_user_tweets(id):

  model_tweets = Tweet.query.filter(Tweet.user_id==id).all()
  tweets = []
  for model_tweet in model_tweets:
    tweet = model_tweet.to_dict()
    tweet["user"] = model_tweet.user.to_safe_object()
    tweets.append(tweet)

  return jsonify(tweets)


# Get all all tweets joined with user data
@tweets.route("/", methods=["GET"])
def get_all_tweets():

  model_tweets = db.session.query(Tweet).options(joinedload("user")).all()
  tweets = []
  for model_tweet in model_tweets:
    tweet = model_tweet.to_dict()
    tweet["user"] = model_tweet.user.to_safe_object()
    tweets.append(tweet)

  return jsonify(tweets)


# Create a tweet
@tweets.route("/post", methods=["POST"])
def post_tweet():

  data = json.loads(request.data)
  tweet = Tweet(
    user_id = data["user_id"],
    content = data["content"],
    )
  db.session.add(tweet)
  db.session.commit()

  return jsonify(Goodjob='you posted to db')