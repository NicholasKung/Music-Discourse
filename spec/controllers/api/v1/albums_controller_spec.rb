require 'rails_helper'

RSpec.describe Api::V1::AlbumsController, type: :controller do
  describe "GET#show" do

    let!(:user) { User.create(
      id:1,
      email:"email6@email.com",
      role: "member",
      password:"123456"
      ) }
    let!(:album1) { Album.create(
      album: "test album 1",
      art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
      artist: "Selena Gomez",
      year: 2020,
      genre: "Pop",
      user: user
      ) }

    let!(:album2) { Album.create(
      album: "test album 2",
      art: "https://www.billboard.com/files/styles/900_wide/public/media/Bad-Religion-Age-of-Unreason-album-art-2019-billboard-1240.jpg",
      artist: "Bad Religion",
      year: 2019,
      genre: "Punk",
      user: user
      ) }
    it "should return individual album" do

      get :show, params: {id: album1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["album"]).to eq "test album 1"
      expect(returned_json["art"]).to eq "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712"
      expect(returned_json["artist"]).to eq "Selena Gomez"
      expect(returned_json["year"]).to eq 2020
      expect(returned_json["genre"]).to eq "Pop"

      get :show, params: {id: album2.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["album"]).to eq "test album 2"
      expect(returned_json["art"]).to eq "https://www.billboard.com/files/styles/900_wide/public/media/Bad-Religion-Age-of-Unreason-album-art-2019-billboard-1240.jpg"
      expect(returned_json["artist"]).to eq "Bad Religion"
      expect(returned_json["year"]).to eq 2019
      expect(returned_json["genre"]).to eq "Punk"
    end
  end

  describe "GET#index" do
    let!(:user) { User.create(
      id:1,
      email:"email6@email.com",
      role: "member",
      password:"123456"
      ) }
    let!(:first_album) { Album.create(
      album: "Mama",
      art: "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
      artist: "Tupac",
      year: 1992,
      genre: "Pop",
      user: user
      ) }
    let!(:second_album) { Album.create(
      album: "Girls",
      art: "https://media.giphy.com/media/r6ALgGVKLg93O/giphy.gif",
      artist: "Beyonce",
      year: 2009,
      genre: "Country",
      user: user
      ) }

    it "should return a list of all the albums" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2

      expect(returned_json[0]["album"]).to eq "Mama"
      expect(returned_json[0]["art"]).to eq "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif"
      expect(returned_json[0]["artist"]).to eq "Tupac"
      expect(returned_json[0]["year"]).to eq 1992
      expect(returned_json[0]["genre"]).to eq "Pop"

      expect(returned_json[1]["album"]).to eq "Girls"
      expect(returned_json[1]["art"]).to eq "https://media.giphy.com/media/r6ALgGVKLg93O/giphy.gif"
      expect(returned_json[1]["artist"]).to eq "Beyonce"
      expect(returned_json[1]["year"]).to eq 2009
      expect(returned_json[1]["genre"]).to eq "Country"
    end
  end

  describe "POST#create" do
    context 'when a successful request is made with proper params' do
      let!(:user) { User.create(
        id:1,
        email:"email6@email.com",
        role: "member",
        password:"123456"
        ) }

        let!(:new_album_hash) { { album:"Pink", artist:"Nicki Minaj", genre:"Rap", year: 2011, art: "www.art.com", user: user} }

      it "create a new Album" do
        sign_in user

        expect{ post :create, params: new_album_hash , format: :json }.to change { Album.count }.from(0).to(1)
      end

      it "returns the new album as JSON" do
        sign_in user

        post :create, params: new_album_hash, format: :json

        response_body = JSON.parse(response.body)
        expect(response_body["album"]["album"]).to eq "Pink"
        expect(response_body["album"]["artist"]).to eq "Nicki Minaj"
        expect(response_body["album"]["genre"]).to eq "Rap"
        expect(response_body["album"]["year"]).to eq 2011
        expect(response_body["album"]["art"]).to eq "www.art.com"
      end
    end

    context 'when a malformed request is made' do
      let!(:bad_album_data) { { album: "Yellow" } }

      it "does not persist data to database" do
        prev_count = Album.count
        post :create, params: bad_album_data, format: :json
        new_count = Album.count

        expect(new_count).to eq prev_count
      end
    end
  end
end
