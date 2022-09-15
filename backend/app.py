from flask import Flask
from flask_cors import CORS
from flask import Response
import tweepy
import json
import credentials

app = Flask(__name__)
CORS(app)

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