require "rails_helper"

RSpec.describe Api::V1::AlbumsController, type: :controller do
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

  describe "GET#index" do

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
end
