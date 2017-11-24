class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
  end

  def update

  end

  def destroy

  end

  private
  def album_params
    params.require(:album).permit(:name, :description)
  end
end
