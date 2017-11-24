class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    # TODO ensure that bands can only update their own albums
    @album = Album.find(params[:id])

    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_band.albums.find(params[:id])

    if @album.destroy
      # TODO fiigure out what to render
      render :show
    else
      rennder json @album.errors.full_messages, status: 422
    end
  end

  private
  def album_params
    params.require(:album).permit(:band_id, :name, :description)
  end
end
