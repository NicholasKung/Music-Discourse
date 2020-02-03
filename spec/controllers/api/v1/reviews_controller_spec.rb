require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:user1) {User.create(
    id: 1,
    email: "yo@yo.com",
    password: "password1"
    )}

  let!(:user2) {User.create(
    id: 2,
    email: "no@yo.com",
    password: "password2"
      )}

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
    user: user1,
    album_id: 1,
    album: album1,
    rating: 5,
    review: "Decent"
  )}

  let!(:review2) {Review.create(
    id: 2,
    user_id: 2,
    user: user2,
    album_id: 1,
    album: album1,
    rating: 7,
    review: "Great"
  )}

  describe "GET#show" do
    it "should return a list of reviews for that album" do

      get :show, params: {
        id: review1.id,
        user_id: user1.id,
        album_id: album1.id
       }

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["reviews"][0]["user"]["email"]).to eq "yo@yo.com"
      expect(returned_json["reviews"][0]["album_id"]).to eq 1
      expect(returned_json["reviews"][0]["rating"]).to eq 5
      expect(returned_json["reviews"][0]["review"]).to eq "Decent"

      get :show, params: {
        id: review2.id,
        user_id: user2.id,
        album_id: album1.id
      }

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["reviews"][1]["user"]["email"]).to eq "no@yo.com"
      expect(returned_json["reviews"][1]["album_id"]).to eq 1
      expect(returned_json["reviews"][1]["rating"]).to eq 7
      expect(returned_json["reviews"][1]["review"]).to eq "Great"
    end
  end

  describe "POST#create" do
    context 'when a successful request is made with proper params' do
      let!(:new_review_hash) {{
        id: 3,
        user: user3,
        user_id: user3.id,
        album: album1,
        album_id: album1.id,
        rating: 5,
        review: "It was medium"
      }}

      let!(:user3) {User.create(
        id: 3,
        email: "noyo@yo.com",
        password: "password3"
      )}

      it "creates a new Review" do
        sign_in user3
        expect { post :create, params: new_review_hash, format: :json }.to change { Review.count }.from(2).to(3)
      end

      it "returns the new review as JSON" do
        sign_in user3

        post :create, params: new_review_hash, format: :json

        returned_json = JSON.parse(response.body)

        expect(response.status).to eq 200
        expect(response.content_type).to eq ("application/json")

        expect(returned_json["review"]["review"]).to eq "It was medium"
        expect(returned_json["review"]["rating"]).to eq 5
      end
    end
  end


end
