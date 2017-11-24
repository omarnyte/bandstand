# == Schema Information
#
# Table name: bands
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  band_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Band < ApplicationRecord
  validates :username, :email, :band_name, :password_digest,
      :session_token, presence: true
  validates :username, :email, :band_name, uniqueness: true
  validates :band_name, length: { maximum: 30 }
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :albums

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    band = Band.find_by(username: username)
    band && band.is_password?(password) ? band : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
