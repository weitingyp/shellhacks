from flask import Flask

app = Flask(__name__) #instantiate Flask app

from api import serve