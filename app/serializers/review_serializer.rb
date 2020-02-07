class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :user_id, :album_id, :email, :album, :review_date

  belongs_to :user
  belongs_to :album

  def email
    object.user.email
  end

  def album
    object.album
  end

  def review_date
  "#{object.created_at.strftime("%B %d, %Y - %I:%M%P")}"
  end
end
