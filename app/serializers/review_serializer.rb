class ReviewSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :rating, :review, :user_id, :album_id, :email, :album, :review_date
=======
  attributes :id, :rating, :review, :user_id, :album_id, :email
>>>>>>> 819328560f7d38d24246890b22b1b76c4c0aff5b

  belongs_to :user
  belongs_to :album
  has_many :votes

  def email
    object.user.email
  end

<<<<<<< HEAD
  def album
    object.album
  end

  def review_date
  "#{object.created_at.strftime("%B %d, %Y - %I:%M%P")}"
  end
=======
>>>>>>> 819328560f7d38d24246890b22b1b76c4c0aff5b
end
