from app import db

class User(db.Model): #create table using db.Model base class to store tasks
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200))
    desc = db.Column(db.String,default='')

db.create_all() #create all tables
db.session.commit()