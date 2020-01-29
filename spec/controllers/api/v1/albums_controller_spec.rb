require "rails_helper"

RSpec.describe Api::V1::AlbumsController, type: :controller do

  describe "GET#index" do
    let!(:first_album) { Album.create(
      album: "Mama",
      art: "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
      artist: "Tupac",
      year: 1992,
      genre: "Pop"
      ) }
      let!(:second_album) { Album.create(
        album: "Girls",
        art: "https://media.giphy.com/media/r6ALgGVKLg93O/giphy.gif",
        artist: "Beyonce",
        year: 2009,
        genre: "Country"
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
      let!(:new_album_hash) { { album:"Pink", artist:"Nicki Minaj", genre:"Rap", year: 2011, art: "www.art.com"} }

      it "create a new Album" do

        expect{ post :create, params: new_album_hash , format: :json }.to change { Album.count }.from(0).to(1)
      end

      it "returns the new album as JSON" do
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
