require 'rails_helper'

RSpec.describe AlbumsDeleteController, type: :controller do
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

  describe "DELETE#destroy" do
    it "should delete the desired album." do
      prev_count = Album.count
      Album.destroy(album1.id)
      expect(Album.count).to eq(prev_count - 1)
    end
  end
end
