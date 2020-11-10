from flask import jsonify, request, session
from app import app, mongo, crypt
from bson.objectid import ObjectId


def index():
    return app.send_static_file('index.html')


def login():
    try:
        email = request.get_json()['email']
        password = request.get_json()['password']
        user = mongo.users.find_one({'email': email})

        if user and crypt.check_password_hash(user['password'], password):
            session['user'] = user
            return jsonify({'message': 'Logged in Successfully!'}), 200
        return jsonify({'message': 'Invalid username or password'}), 401

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def register():
    try:
        user = mongo.users
        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        email = request.get_json()['email']
        password = request.get_json()['password'].encode('utf-8')

        found = user.find_one({'email': email})
        if found is None:
            user.insert_one({
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': password
            })
            return jsonify({})

        return jsonify({'message': 'User already exists'}), 409

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def profile():
    try:
        email = request.get_json()['email']
        user = mongo.users.find_one({'email': email})
        return jsonify({
            'name': str(user['first_name'] + user['last_name']),
            'email': user['email'],
            'height': user['height'] if 'height' in user else "",
            'weight': user['weight'] if 'weight' in user else "",
            'age': user['age'] if 'age' in user else "",
            'gender': user['gender'] if 'gender' in user else ""
        })

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def logout():
    session.clear()
    return jsonify({'message': 'Logged Out'})


def add():
    try:
        json = request.get_json()
        email = json['email']

        if email != session['user']['email']:
            return jsonify({'message': 'Unauthorized'}), 401

        age = json['age'] if 'age' in json else ""
        weight = json['weight'] if 'weight' in json else ""
        height = json['height'] if 'height' in json else ""
        gender = json['gender'] if 'gender' in json else ""

        mongo.users.update({'email': email}, {"$set": {'age': age, 'weight': weight, 'height': height, 'gender': gender}})
        return jsonify({})

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def todo():
    try:
        email = request.get_json()['email']
        user = mongo.users
        if request.method == 'POST':
            _id = ObjectId()
            todo_ = request.get_json()['task']
            done = False
            user.update({'email': email}, {"$push": {"todoList": {
                "_id": _id,
                "task": todo_,
                "done": done}
            }})
            return jsonify({}), 204

        else:
            my_user = user.find_one({'email': email})
            todo_ = []
            if 'todoList' in my_user and my_user['todoList']:
                todo_ = my_user['todoList']
                print(todo_)
                for element in todo_:
                    element['_id'] = str(element['_id'])
            return jsonify(todo_)

    except Exception as e:
        print("Error:", e)
        return jsonify({'message': 'error'}), 500


def delete_todo_list(todo_id):
    try:
        email = request.get_json()['email']
        temp = mongo.users.find_one({'email': email, 'todoList._id': ObjectId(todo_id)})['todoList']
        my_list = [element for element in temp if element['_id'] == ObjectId(todo_id)][0]
        mongo.users.update({'email': email}, {"$pull": {"todoList": my_list}})
        return jsonify({}), 204

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def update_todo_list(todo_id):
    try:
        email = request.get_json()['email']
        mongo.users.update_one({'email': email, 'todoList._id': ObjectId(todo_id)},
                               {"$set": {"todoList.$.done": True}})
        return jsonify({}), 204
    except Exception as e:
        print(e)
        return jsonify({'message': 'Internal error'}), 500


def food():
    try:
        email = request.get_json()['email']
        user = mongo.users

        if request.method == 'POST':
            food_name = request.get_json()['name']
            calorie = request.get_json()['calorie']

            user.update({'email': email}, {"$push": {"food_list": {
                "name": food_name,
                "calorie": calorie
            }}})
            return jsonify({})

        else:
            food_list = user.find_one({'email': email})['food_list']
            return jsonify({
                'message': 'success',
                'food_list': food_list
            })

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500


def get_food():
    try:
        email = request.get_json()['email']

        food_list = mongo.users.find_one({'email': email})['food_list']
        return jsonify({
            'message': 'success',
            'food_list': food_list
        })

    except Exception as e:
        print(e)
        return jsonify({'message': 'error'}), 500
