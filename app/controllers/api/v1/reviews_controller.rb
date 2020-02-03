class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :show]

  def show
    album = Album.find(params[:album_id])
    reviews = album.reviews
    render json: reviews
  end

  def create
    album = Album.find(params["album_id"])
    review = Review.new(review_params)
    review.user = current_user
    review.album = album

    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.permit(:user_id, :album_id,:rating, :review)
  end
end
