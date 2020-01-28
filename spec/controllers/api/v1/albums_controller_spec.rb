require 'rails_helper'

RSpec.describe Api::V1::AlbumsController, type: :controller do
    let!(:album1) {Album.create(
      album: "test album 1",
      art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
      artist: "Selena Gomez",
      year: 2020,
      genre: "Pop"
      )}

    let!(:album2) {Album.create(
      album: "test album 2",
      art: "https://www.billboard.com/files/styles/900_wide/public/media/Bad-Religion-Age-of-Unreason-album-art-2019-billboard-1240.jpg",
      artist: "Bad Religion",
      year: 2019,
      genre: "Punk"
    )}

    describe "GET#show" do
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
end
