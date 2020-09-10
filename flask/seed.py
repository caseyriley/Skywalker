from flask import Blueprint, jsonify, request
from models import db
import requests
from faker import Faker

fake = Faker()
seed = Blueprint('seed', __name__)


@seed.route("/", methods=["GET"])
def seeder():

    seeds = int(request.args.get("num")) if request.args.get("num") else 1

    for seed in range(seeds):
        # try to get data
        try:
            user_data = requests.get(
                'https://fakerapi.it/api/v1/persons?_quantity=1').json()["data"][0]  # noqa
            user = User(
                email=user_data["email"],
                hashedpassword="password",
                firstname=user_data["firstname"],
                lastname=user_data["lastname"],
                zipcode=user_data["address"]["zipcode"],
                about=fake.sentence(),
                profilepic=user_data["image"],
            )
            db.session.add(user)

            for i in range(10):
                tweet = Tweet(
                    userid=1,
                    content=fake.sentence(),
                    media="http://placeimg.com/640/480/any"
                )
                db.session.add(tweet)

        except:  # noqa
            return jsonify(Failure='Unable to get seed data :(')  # noqa

    # try to post to db
    try:
        db.session.commit()
        return jsonify(Success=f"Added {seeds} user and {seeds*10} tweets to database")  # noqa

    except:  # noqa
        return jsonify(Failure='Unable to seed to database :(')
