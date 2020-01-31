require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "GET#show" do

    let!(:album1) {Album.create(
      id: 1,
      album: "test album 1",
      art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
      artist: "Selena Gomez",
      year: 2020,
      genre: "Pop"
      )}

    let!(:review1) {Review.create(
      id: 1,
      user_id: 1,
      album_id: 1,
      rating: 5,
      review: "Decent"
      )}

    let!(:review2) {Review.create(
      id: 1,
      user_id: 2,
      album_id: 1,
      rating: 7,
      review: "Great"
      )}


    it "should return a list of reviews for that album" do

      get :show, params: {id: review1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
      binding.pry
      expect(returned_json["user_id"]).to eq 1
      expect(returned_json["album_id"]).to eq 1
      expect(returned_json["rating"]).to eq 5
      expect(returned_json["review"]).to eq "Decent"

      get :show, params: {id: review2.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["user_id"]).to eq 2
      expect(returned_json["album_id"]).to eq 1
      expect(returned_json["rating"]).to eq 7
      expect(returned_json["review"]).to eq "Great"
    end
  end


end
