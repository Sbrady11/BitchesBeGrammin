# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Photo.delete_all
Comment.delete_all

sarah = User.create(username: 'sarah', avatar: 'http://img.providr.com/Pinterest33.jpg', password: 'password', bio: "HELLO WORLD!")
simon = User.create(username: 'simon', avatar: 'https://i.pinimg.com/564x/f5/d7/84/f5d784aa1eabbde15ba5e2d90c3ba828.jpg', password: 'password', bio: "HELLO WOiLD!")
rebecca = User.create(username: 'rebecca', avatar: 'https://i.pinimg.com/564x/89/54/fc/8954fc3cacdd290f84865c05095b023c.jpg', password: 'password', bio: "HEY WORLD!")


photo = Photo.create(pic: "https://i.pinimg.com/564x/06/3f/6a/063f6a9833b87d35c3cc01ac88ba7a0e.jpg", caption: "Family Photo! Everyone is home for the Holidays!", user: sarah)
photo2 = Photo.create(pic: "https://i.pinimg.com/564x/fe/af/7a/feaf7aa937a897151670d9c297713e05.jpg", caption: "#Besties <3<3", user: simon)
photo3 = Photo.create(pic: "https://i.pinimg.com/564x/80/89/ae/8089aec1bc2f0e36f02633260465584e.jpg", caption: "Last night was LITTY", user: rebecca)

comment = Comment.create(user: rebecca, photo: photo, body: "omg! everyone looks so good!")
comment = Comment.create(user: rebecca, photo: photo, body: "Is that your mom?!?!")
comment = Comment.create(user: simon, photo: photo, body: "Lets HANG!")
comment = Comment.create(user: sarah, photo: photo2, body: "can't believe you guys are hanging w/o me :()")
comment = Comment.create(user: rebecca, photo: photo2, body: "What a great day!")
comment = Comment.create(user: sarah, photo: photo3, body: "LAST NIGHT WAS THE BOMB!!!")
comment = Comment.create(user: simon, photo: photo3, body: "your apartment is dope!")
