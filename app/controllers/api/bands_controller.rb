class Api::BandsController < ApplicationController
  def create
    @band = Band.new(band_params)

    if @band.save
      login(@band)
      render 'api/bands/show'
    else
      render json: @band.errors.full_messages, status: 422
    end
  end

  def show
    @band = Band.find(params[:id])
    render 'api/bands/show'
  end

  # def index
  #
  # end

  private
  def band_params
    params.require(:band).permit(:username, :password, :email, :band_name)
  end

end
