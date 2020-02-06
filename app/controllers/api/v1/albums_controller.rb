class Api::V1::AlbumsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  before_action :authorize_user, only: [:create, :destroy]

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Album.all
  end

  def show
    album = Album.find(params[:id])
    render json: album
  end

  def create
    album = Album.new(album_params)
    album.user = current_user
    if album.save
      render json: { album: album }
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    album = Album.find(params[:id])

    if album.destroy
      render json: { message: "Delete Successful." }
    else
      render json: { message: "Could not delete." }
    end
  end

private

  def album_params
    params.permit(:album, :artist, :genre, :year, :art)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Sign In Please")
    end
  end
end
