class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album, :art, :artist, :year, :genre, :reviews, :average, :user

  has_many :reviews
  belongs_to :user

  def average
    review_total = []
    object.reviews.each do |review|
      review_total << review.rating
    end
    if review_total.length > 0
      review_average = review_total.sum.to_f / review_total.length
      return "#{review_average.round(1)}/10"
    else
      return "Not Yet Rated"
    end

  end

end
