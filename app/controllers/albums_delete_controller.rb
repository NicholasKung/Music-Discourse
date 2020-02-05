class AlbumsDeleteController < ApplicationController
  def destroy
    album = Album.find(params[:id])
    album.destroy  
  end
end
