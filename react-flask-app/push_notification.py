import firebase_admin
from firebase_admin import credentials, firestore
from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
from collections import Counter
import tweepy
import argparse
import io
import json
import os
from google.cloud import language
import numpy
import six
import random
import json

#consumer key, consumer secret, access token, access secret.
# add from env
ckey=""
csecret=""
atoken=""
asecret=""


cred = credentials.Certificate("") # path to service account json
default_app = firebase_admin.initialize_app(cred)

db = firestore.client()


def classify(text, verbose=True):
    """Classify the input text into categories. """

    language_client = language.LanguageServiceClient()

    document = language.types.Document(
        content=text,
        type=language.enums.Document.Type.PLAIN_TEXT)
    response = language_client.classify_text(document)
    categories = response.categories

    result = {}

    for category in categories:
        # Turn the categories into a dictionary of the form:
        # {category.name: category.confidence}, so that they can
        # be treated as a sparse vector.
        result[category.name] = category.confidence

    if verbose:
        print(text)
        for category in categories:
            print(u'=' * 20)
            print(u'{:<16}: {}'.format('category', category.name))
            print(u'{:<16}: {}'.format('confidence', category.confidence))

    return result



def authenticate(ckey, csecret, atoken, asecret):
    auth = tweepy.OAuthHandler(ckey, csecret)
    auth.set_access_token(atoken, asecret)
    api = tweepy.API(auth)

    return api

def get_users_most_recent_tweets(api):
	timeline = api.home_timeline()
	arr = []

	for t in timeline:
		status = api.get_status(t.id, tweet_mode="extended")
		#arr.append(status.full_text)
		try:
			arr.append(status.retweeted_status.full_text)
		except AttributeError:  # Not a Retweet
			if len(list(str(status.full_text))) >= 100:
				arr.append(status.full_text.strip("'"))

	print(arr)

	classy = [classify(tweet) for tweet in arr]
	print(classy)

	most_common_topic = Counter(classy).most_common(1)[0][0]
	return most_common_topic

def report_user_on_firebase(db, screen_name="weitingyp"):
	api = authenticate(ckey, csecret, atoken, asecret)
	name = api.get_user(screen_name).name

	#screen_name = "weitingyp"
	#name = "Wei-Ting"

	api = authenticate(ckey, csecret, atoken, asecret)
	mct = get_users_most_recent_tweets(api)
	
	######## Yet to fix #####
	doc_ref = db.collection(u'Users').document(screen_name)
	doc_ref.set({
    	u'screen_name': screen_name,
    	u'name': name,
    	u'mct': mct
	})

	print("User "+scree_name+" Added to Firestore")

def make_search_on_topic(db, screen_name="weitingyp"):
	users_ref = db.collection(u'Users').document(screen_name) # where(u'mct', u'==', u'/Finance/Investing/Commodities & Futures Trading').stream() #.document(scree_name)
	doc = users_ref.get()
	
	#print(doc.get('screen_name'))

	return doc


def ethnicity(n):
	races = {'White': 0, 'Latinx': 0, 'Black':0, 'Asian':0}
	arr = ['White', 'White', 'White', 'White', 'Black', 'Black', 'Latinx']

	for i in range(n):
		races[arr[random.randint(0, 6)]] += 1

	# Gets the least common of the races
	least_common_race = Counter(races).most_common()[:-2:-1][0][0]
	print(Counter(races))
	print(least_common_race)

	return least_common_race




def make_search(doc, db):
	api = authenticate(ckey, csecret, atoken, asecret)
	tweets = api.search(doc.get('mct'))
	lcr = ethnicity(len(tweets))

	# See whether there's a tweet that matches the lack of ethnicity in the conversation
	if doc.get('race') == lcr:
		### Push tweets[0] to notification.
		print(tweets[0].user.screen_name, tweets[0].id) # These two elements are enough to produce a twitter link to the tweet

	ref_link = 'https://www.twitter.com/{}/status/{}'.format(tweets[0].user.screen_name, tweets[0].id)
	
	print(ref_link)

	return ref_link


#report_user_on_firebase(db)
make_search(make_search_on_topic(db), db)
