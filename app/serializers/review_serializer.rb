class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :user_id, :album_id, :email, :album

  belongs_to :user
  belongs_to :album

  def email
    object.user.email
  end

  def album
    object.album
  end
end
