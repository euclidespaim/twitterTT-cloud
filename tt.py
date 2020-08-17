# "https://api.twitter.com/1.1/trends/place.json?id=23424768"
import json
from requests_oauthlib import OAuth1Session

MAX_TWEETS = 100
BASE_URL = "https://api.twitter.com/1.1/trends/place.json?id="
WOEID = "23424768"


class TTSearchClient(object):
    name = []

    API_KEY = "r3WikNY7EY8HdoCPmABMZK3nz"
    API_SECRET = "dGTEx8LJ2bHsV6wX30WqVeSFf9VGg9AtCKi5Sgvu3hRiEBJ55a"
    ACCESS_TOKEN = "26241017-yv3CoA4u0FdYc0GqXw9x8AbzR6ZQ9VRMnzcEos3nB"
    ACCESS_TOKEN_SECRET = "6aDaHzWmCZXzbBavKi3U1iEDCwltOS4HMuQE6jNR4oM3C"

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
