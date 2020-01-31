# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user = User.create(:id)
user3 = User.create!(id:3, email:"email3@email.com", role: "member", password:"123456")
user4 = User.create!(id:4, email:"email4@email.com", role: "member", password:"123456")
user5 = User.create!(id:5, email:"email5@email.com", role: "member", password:"123456")
user6 = User.create!(id:6, email:"email6@email.com", role: "member", password:"123456")

Album.create(album:"Rare", art:"https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712", artist: "Selena Gomez", year: 2020, genre: "pop", user:user3)

Album.create(album:"Age of Unreason", art:"https://www.billboard.com/files/styles/900_wide/public/media/Bad-Religion-Age-of-Unreason-album-art-2019-billboard-1240.jpg", artist: "Bad Religion", year: 2019, genre: "Punk", user:user4)

Album.create(album:"When We All Fall Asleep, Where Do We Go?", art:"https://www.billboard.com/files/styles/900_wide/public/media/Billie-Eilish-When-We-All-Fall-Asleep-Where-Do-We-Go_-album-art-2019-billboard-1240.jpg", artist: "Billie Eilish", year: 2019, genre: "Alt Pop", user:user5)

Album.create(album:"A Big Day", art:"https://www.billboard.com/files/styles/900_wide/public/media/Chance-the-Rapper-The-Big-Day-album-art-2019-billboard-1240.jpg", artist: "Chance the Rapper", year: 2019, genre: "Hip Hop", user:user6)
