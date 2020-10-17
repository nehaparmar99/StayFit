from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
app.config['JWT_SECRET_KEY'] = 'my_secret'
app.config['JWT_TOKEN_LOCATION'] = ['cookies']

mongo = PyMongo(app)
crypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route('/users/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']

    try:
        user = mongo.db.users.find_one({'email': email})
        if user is not None:
            if crypt.check_password_hash(user['password'], password):
                access_token = create_access_token(identity={
                    'first_name': user['first_name'],
                    'last_name': user['last_name'],
                    'email': user['email']
                })
                return jsonify({'token': access_token})
    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500

    return jsonify({'message': 'Invalid username or password'}), 404


@app.route('/users/register', methods=['POST'])
def register():
    user = mongo.db.users

    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    password = request.get_json()['password'].encode('utf-8')

    found = user.find_one({'email': email})
    if found is None:
        password = crypt.generate_password_hash(password).decode('utf-8')
        user.insert_one({
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password
        })
        return jsonify({'message': 'success'})

    return jsonify({'message': 'User already exists'}), 500


@app.route('/api/add-data/', methods=['POST'])
@jwt_required
def add():
    try:
        email = get_jwt_identity()['email']
        weight = request.get_json['email']
        height = request.get_json['password']
        gender = request.get_json['gender']

        mongo.db.users.update({'email': email}, {"$set": {'weight': weight, 'height': height, 'gender': gender}})
        return jsonify({'message': 'success'})

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


@app.route('/api/todo', methods=['POST', 'GET'])
@jwt_required
def todo():
    email = get_jwt_identity()['email']
    user = mongo.db.users
    if request.method == 'POST':
        try:
            todo_ = request.get_json()['todo']
            due_date = request.get_json()['due_date']
            done = request.get_json()['done']
            user.update({'email': email}, {"$push": {"todoList": [{
                "task": todo_,
                "due_date": due_date,
                "done": done}]
            }})
            return jsonify({'message': 'success'})
        except Exception as e:
            print(e)
            return jsonify({'message': 'error'}), 500

    elif request.method == 'GET':
        try:
            todo_ = user.find_one({'email': email})['todoList']
            return jsonify({
                    'message': 'success',
                    'todo_list': todo_
                })
        except Exception as e:
            print(e)
            return jsonify({'message': 'error'}), 500

    return 404


@app.route('/api/food', methods=['POST', 'GET'])
@jwt_required
def food():
    email = get_jwt_identity()['email']
    user = mongo.db.users

    if request.method == 'POST':
        try:
            food_name = request.get_json()['name']
            calorie = request.get_json()['calorie']

            user.update({'email': email}, {"$push": {"food_list": {
                "name": food_name,
                "calorie": calorie
            }}})
            return jsonify({'message': 'success'})
        except Exception as e:
            print(e)
            return jsonify({'message': 'error'}), 500

    elif request.method == 'GET':
        try:
            food_list = user.find_one({'email': email})['food_list']
            return jsonify({
                'message': 'success',
                'food_list': food_list
            })
        except Exception as e:
            print(e)
            return jsonify({'message': 'error'}), 500

    return 404


if __name__ == '__main__':
    app.run(debug=True)
