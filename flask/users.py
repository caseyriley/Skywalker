from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from models import db, User


user = Blueprint('users', __name__,)


@user.route('/')
# @jwt_required
def all_users():
    res = User.query.all()
    return jsonify({"users": [user.to_safe_object() for user in res]})


# @user.route('/<int:id>')
@user.route('/<id>')
def user_by_id(id):
    # -- Future use of JWT library
    # current_user = get_jwt_identity()
    # current_user = User.query.get(int(get_jwt_identity()))
    user = User.query.get(int(id))
    return jsonify(user.to_safe_object())

# get current user from access token
@user.route('/token', methods=['GET'])
@jwt_required
def api():
    user = get_jwt_identity()
    current_user = User.query.filter_by(email=user['email']).first()
    safe_user = current_user.to_safe_object()
    return jsonify(safe_user), 200
