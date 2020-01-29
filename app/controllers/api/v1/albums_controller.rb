class Api::V1::AlbumsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Album.all
  end

  def create
    album = Album.new(album_params)
    if album.save
      render json: { album: album }
    else
      render json: { error: album.errors.full_messages }, status: :unprocessable_entity
    end
  end

private

  def album_params
    params.permit(:album, :artist, :genre, :year, :art)
  end
end
