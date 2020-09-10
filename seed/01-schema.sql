CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL, 
  email VARCHAR(255) NOT NULL UNIQUE,
  hashed_password BYTEA NOT NULL,
  firstname VARCHAR(40) NOT NULL,
  lastname VARCHAR(40) NOT NULL,
  zipcode VARCHAR(20),
  about VARCHAR(240),
  profile_pic VARCHAR(500),
  banner_pic VARCHAR(500),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tweets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  content VARCHAR(240) NOT NULL,
  media VARCHAR(500),
  retweet_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE retweets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  tweet_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tweet_id) REFERENCES users(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 


CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  tweet_id INTEGER NOT NULL,
  content VARCHAR(240) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tweet_id) REFERENCES tweets(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  tweet_id INTEGER ,
  retweet_id INTEGER ,
  reply_id INTEGER ,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (tweet_id) REFERENCES tweets(id),
  FOREIGN KEY (retweet_id) REFERENCES retweets(id),
  FOREIGN KEY (reply_id) REFERENCES replies(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follows (
  follow_relations SERIAL PRIMARY KEY,
  following_id INTEGER NOT NULL,
  followed_by_id INTEGER NOT NULL,
  UNIQUE (following_id, followed_by_id),
  FOREIGN KEY (following_id) REFERENCES users(id),
  FOREIGN KEY (followed_by_id) REFERENCES users(id),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);