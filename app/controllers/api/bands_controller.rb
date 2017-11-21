class BandsController < ApplicationController
  def create
    @band = Band.new(band_params)

    if @band.save
      login(@user)
      render 'api/users/show'
    else
      render json: @band.errors.full_messages, status: 422 
    end
  end

  private
  def band_params
    params.require(:band).permit(:username, :password, :email, :band_name)
  end

end
