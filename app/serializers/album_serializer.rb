class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album, :art, :artist, :year, :genre, :reviews, :user

  has_many :reviews
  belongs_to :user
end
