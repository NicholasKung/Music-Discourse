class Api::V1::AlbumsController < ApplicationController
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

  def update
    album = Album.find(params[:id])

    if current_user == album.user
      album.update_attributes(album_params)
      render json: album
    else
      render json: Album.all
    end
  end

  def destroy
    album = Album.find(params[:id])

    if current_user == album.user
      album.destroy
      render json: { message: "Delete Successful." }
    else
      render json: { message: "Could not delete." }
    end
  end

private

  def album_params
    params.permit(:album, :artist, :genre, :year, :art)
  end
end
