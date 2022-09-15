import tweepy
import json
import credentials

client = tweepy.Client(bearer_token=credentials.BEARER_TOKEN, return_type=dict)

Query='survey gift card -is:retweet'

response = client.search_recent_tweets(query=Query, max_results=10)

tweets = json.dumps(response, indent=2)

with open("dataset.json", "w") as outfile:
    outfile.write(tweets)