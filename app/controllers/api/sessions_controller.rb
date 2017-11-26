class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Incorrect password. Please try again."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      # TODO figure out where a logout should redirect
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
