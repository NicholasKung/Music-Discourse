class AlbumsDeleteController < ApplicationController
    def destroy
      album = Album.find(params[:id])
    if album.destroy
      flash[:alert] = "Album Deleted!!"
    else
      flash.now[:error] = "Album NOT deleted."
    end
  end
end
