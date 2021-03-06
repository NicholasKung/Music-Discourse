require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:user1) {User.create(
    email: "yo@yo.com",
    password: "password1",
    role: "member"
  )}

  let!(:user2) {User.create(
    email: "no@yo.com",
    password: "password2",
    role: "member"
  )}

  let!(:album1) {Album.create(
    album: "test album 1",
    art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
    artist: "Selena Gomez",
    year: 2020,
    genre: "Pop",
    user: user2
  )}

  let!(:review1) {Review.create(
    user: user1,
    album_id: 1,
    album: album1,
    rating: 5,
    review: "Decent"
  )}

  let!(:review2) {Review.create(
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
      expect(returned_json["reviews"][0]["album_id"]).to eq album1.id
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
      expect(returned_json["reviews"][1]["album_id"]).to eq album1.id
      expect(returned_json["reviews"][1]["rating"]).to eq 7
      expect(returned_json["reviews"][1]["review"]).to eq "Great"
    end
  end

  describe "POST#create" do
    context 'when a successful request is made with proper params' do
      let!(:user3) {User.create(
        email: "noyo@yo.com",
        password: "password3"
      )}

      let!(:new_review_hash) {{
        user: user3,
        user_id: user3.id,
        album: album1,
        album_id: album1.id,
        rating: 5,
        review: "It was medium"
      }}

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

    context 'when a malformed request is made' do
      let!(:bad_review_data) {{
        user: user2,
        user_id: user2.id,
        album: album1,
        album_id: album1.id,
        review: "It was medium"
      }}

      it "does not persist data to database" do
        prev_count = Review.count
        post :create, params: bad_review_data, format: :json
        new_count = Review.count

        expect(new_count).to eq prev_count
      end
    end

  end
end
