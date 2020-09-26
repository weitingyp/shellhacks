from flask import render_template, request, redirect, url_for, jsonify
from app import app #import the flask app engine

@app.route('/')
def index():
    """
    Render index page
    """
    return render_template('index.html')