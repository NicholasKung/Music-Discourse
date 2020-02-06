# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user = User.create(:id)
user3 = User.create!(email:"email3@email.com", role: "member", password:"123456")
user4 = User.create!(email:"email4@email.com", role: "member", password:"123456")
user5 = User.create!(email:"email5@email.com", role: "member", password:"123456")
user6 = User.create!(email:"email6@email.com", role: "member", password:"123456")

Album.create(album:"Rare", art:"https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712", artist: "Selena Gomez", year: 2020, genre: "pop", user:user3)
Album.create(album:"The Sun Will Come Up", art:"https://www.billboard.com/files/styles/900_wide/public/media/Nina-Nesbitt-The-Sun-Will-Come-Up-the-Seasons-Will-Change-album-art-2019-billboard-1240.jpg", artist: "Nina Nesbitt", year: 2019, genre: "pop", user:user3)
Album.create(album:"Starry Night Over the Phone", art:"https://www.billboard.com/files/styles/1024x1024/public/media/Allday-Starry-Night-Over-the-Phone-album-art-2019-billboard-1240.jpg", artist: "Allday", year: 2019, genre: "Hip-Hop", user:user3)
Album.create(album:"Invasion of Privacy", art:"https://www.billboard.com/files/styles/1024x1024/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg", artist: "Billie Eilish", year: 2018, genre: "Alt Pop", user:user3)
Album.create(album:"K.T.S.E", art:"https://www.billboard.com/files/styles/1024x1024/public/media/teyana-taylor-KTSE-album-art-2018-billboard-embed.jpg", artist: "Teyana Taylor", year: 2019, genre: "Hip Hop", user:user6)
Album.create(album:"Nature", art:"https://www.billboard.com/files/styles/1024x1024/public/media/paul-kelly-nature-album-art-2018-billboard-embed.jpg", artist: "Paul Kelly", year: 2018, genre: "pop", user:user3)
Album.create(album:"Cheese", art:"https://66.media.tumblr.com/06fcee47d7afc6cddf4e433a655bf4f9/tumblr_myzzyrQGDM1t479wao1_1280.jpg", artist: "Allday", year: 2010, genre: "DubStep", user:user3)
Album.create(album:"Abbey Road", art:"https://www.udiscovermusic.com/wp-content/uploads/2015/10/AbbeyRoad.jpg", artist: "The Beatles", year: 1969, genre: "British Rock", user:user3)
Album.create(album:"Back in Black", art:"https://www.udiscovermusic.com/wp-content/uploads/2015/10/theramones.jpg", artist: "Ramones", year: 1980, genre: "Rock n Roll", user:user3)
Album.create(album:"Ramones", art:"https://www.udiscovermusic.com/wp-content/uploads/2015/10/Acdc_backinblack_cover.jpg", artist: "AC/DC", year: 1980, genre: "Rock n Roll", user:user3)
Album.create(album:"The Dark Side of the Moon", art:"https://www.udiscovermusic.com/wp-content/uploads/2015/10/Pink_Floyd_-_Dark_Side_of_the_Moon.jpg", artist: "Pink Floyd", year: 1973, genre: "Rock", user:user3)
