class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :user_id, :album_id, :email

  belongs_to :user
  belongs_to :album

  def email
    object.user.email
  end

end
