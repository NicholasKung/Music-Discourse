class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :user_id, :album_id, :email, :votes

  belongs_to :user
  belongs_to :album
  has_many :votes

  def email
    object.user.email
  end

end
