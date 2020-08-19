# "https://api.twitter.com/1.1/trends/place.json?id=23424768"
import json
from requests_oauthlib import OAuth1Session

MAX_TWEETS = 100
BASE_URL = "https://api.twitter.com/1.1/trends/place.json?id="
WOEID = "23424768"


class TTSearchClient(object):
    name = []

    API_KEY = " "
    API_SECRET = " "
    ACCESS_TOKEN = " "
    ACCESS_TOKEN_SECRET = " "

    def __init__(self):
        self.session = OAuth1Session(self.API_KEY,
                                     self.API_SECRET,
                                     self.ACCESS_TOKEN,
                                     self.ACCESS_TOKEN_SECRET)

    def get_tweets(self):
        url = BASE_URL + WOEID
        response = self.session.get(url)
        topics = json.loads(response.content)[0]["trends"]

        return topics
