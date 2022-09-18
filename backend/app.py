from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
import tweepy
import json
import credentials

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = credentials.SECRET_KEY
CORS(app)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)

def getTweets():
    client = tweepy.Client(bearer_token=credentials.BEARER_TOKEN, return_type=dict)
    Query='survey gift card -win -raffle -drawing -chance -draw -raffling -enter -is:retweet has:links'
    response = client.search_recent_tweets(query=Query, max_results=10)
    tweets = json.dumps(response, indent=2)
    return tweets

@app.route('/')
def index():
    response = getTweets()
    return response

if __name__ == "__main__":
    app.run(debug=True)