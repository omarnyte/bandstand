class Api::SessionsController < ApplicationController
  def create
    @band = Band.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @band
      login(@band)
      # TODO figure out where a login should redirect
      render "api/bands/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @band = current_band
    if @band
      logout!
      # TODO figure out where a logout should redirect
      render "api/bands/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
