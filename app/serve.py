from flask import render_template, request, redirect, url_for, jsonify
from app import app, db #import the flask app engine, SQLAlchemy db
from .models import User

@app.route('/')
def index():
    """
    Render index page
    """
    return redirect(url_for('notifications'))

@app.route('/notifications')
def notifications():
    """
    Render index page
    """
    #TODO: Add notification details
    return render_template('index.html')

@app.route('/<username>/status/<tweet_id>', methods = ['GET'])
def tweet(username,tweet_id):
    """
    Render tweet and thread, e.g. https://twitter.com/chrissyfarr/status/1309907362086612993
    """
    #TODO: replace with thread details/parameters
    return render_template('index.html')