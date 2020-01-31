class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album, :art, :artist, :year, :genre, :reviews

  has_many :reviews

end
