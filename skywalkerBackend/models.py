from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref


db = SQLAlchemy()

follows = db.Table(
  "follows",
  db.Model.metadata,
  db.Column('follow_relations', db.Integer, primary_key=True),
  db.Column('following_id', db.Integer, db.ForeignKey("users.id")),  # noqa
  db.Column('followed_by_id', db.Integer, db.ForeignKey("users.id"))  # noqa
)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.Binary(100), nullable=False)
    firstname = db.Column(db.String(40), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    zipcode = db.Column(db.String(20), nullable=False)
    about = db.Column(db.Text)
    profile_pic = db.Column(db.String)
    banner_pic = db.Column(db.String)
    # pinned_tweet = db.Column(db.Integer)

    tweets = db.relationship("Tweet", backref="user")
    retweets = db.relationship("Retweet", backref="user")
    likes = db.relationship("Like", backref="user")
    replies = db.relationship("Reply", backref="user")

    following = db.relationship("User",
                                secondary=follows,
                                primaryjoin=id == follows.c.following_id,
                                secondaryjoin=id == follows.c.followed_by_id,
                                backref="followed_by",
                                lazy="dynamic")  # noqa

    def to_safe_object(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "zipcode": self.zipcode,
            # "pinned_tweet": self.pinned_tweet,
            "about": self.about,
            "profile_pic": self.profile_pic,
            "banner_pic": self.banner_pic,
        }


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    media = db.Column(db.Text)
    retweet_id = db.Column(db.Integer, db.ForeignKey('tweets.id'))

    # likes = db.relationship('Like', backref='tweet')
    replies = db.relationship('Reply', backref='tweet')
    # retweets = db.relationship('Retweet', backref='tweet')
    # user = db.relationship('User', back_populates="tweets")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "content": self.content,
            "media": self.media,
        }


class Retweet(db.Model):
    __tablename__ = 'retweets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tweet_id = db.Column(db.Integer, db.ForeignKey('tweets.id'))

    likes = db.relationship('Like', backref='retweet')
    


class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)  # noqa
    tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=False)  # noqa
    content = db.Column(db.Text, nullable=False)

    likes = db.relationship('Like', backref='reply')
    users = db.relationship('User', backref='reply')

    def to_dict(self):
      return {
          "id": self.id,
          "user_id": self.user_id,
          "tweet_id": self.tweet_id,
          "content": self.content,
      }


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=True)  # noqa
    retweet_id = db.Column(db.Integer, db.ForeignKey("retweets.id"), nullable=True)  # noqa
    reply_id = db.Column(db.Integer, db.ForeignKey("replies.id"), nullable=True)  # noqa
