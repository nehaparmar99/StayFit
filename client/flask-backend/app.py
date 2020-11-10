from flask import Flask
import pymongo
import urllib
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'kjasremfnahwd@qqldjne010ennv44'
client = pymongo.MongoClient("mongodb+srv://myUser:" +
                             urllib.parse.quote("SF29KYszPPUBBqz") +
                             "@cluster0.o23aw.mongodb.net/StayFit?retryWrites=true&w=majority")
mongo = client.test
crypt = Bcrypt(app)


import main
app.add_url_rule('/', view_func=main.index)
app.add_url_rule('/users/login', view_func=main.login, methods=['POST'])
app.add_url_rule('/users/register', view_func=main.register, methods=['POST'])
app.add_url_rule('/users/logout',view_func=main.logout)

app.add_url_rule('/todos', view_func=main.todo, methods=['POST', 'GET'])
app.add_url_rule('/todos/delete/<todo_id>', view_func=main.delete_todo_list, methods=['POST'])
app.add_url_rule('/todos/update/<todo_id>', view_func=main.update_todo_list, methods=['POST'])

app.add_url_rule('/api/food', view_func=main.food, methods=['POST'])
app.add_url_rule('/get-food', view_func=main.get_food)

app.add_url_rule('/api/add-data', view_func=main.add, methods=['POST'])


