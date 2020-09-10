from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from models import db, Reply


replies = Blueprint('replies', __name__)


@replies.route('/', methods=["POST"])
@jwt_required
def post_reply():

    data = request.get_json()
    reply = Reply(
        user_id=data["user_id"],
        tweet_id=data["tweet_id"],
        content=data["reply"],
    )
    db.session.add(reply)
    db.session.commit()

    return jsonify(Confirm='Reply submitted')
