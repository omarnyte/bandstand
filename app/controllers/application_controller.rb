class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_band
    @current_band ||= Band.find_by(session_token: session[:session_token])
  end

  def login(band)
    session[:session_token] = band.reset_session_token!
    current_band 
  end

  def logout!
    current_band.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    unless current_band
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
