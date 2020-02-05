class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album, :art, :artist, :year, :genre, :reviews, :user

  has_many :reviews
<<<<<<< HEAD
  belongs_to :user
=======
>>>>>>> 05ab9dcfcd6d7641aa5cf3e02ef01fd922199338
end
