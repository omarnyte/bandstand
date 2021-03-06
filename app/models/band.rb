# == Schema Information
#
# Table name: bands
#
#  id             :integer          not null, primary key
#  band_name      :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  location       :string           not null
#  mini_bio       :string           not null
#  image_location :string           not null
#

class Band < ApplicationRecord
  validates :band_name, :location, :mini_bio, :image_location,
    presence: true
  validates :band_name, uniqueness: true

  has_many :band_genres
  has_many :genres, :through => :band_genres
  has_many :albums
  has_many :songs, through: :albums
  has_many :follows,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'Follow'
  has_many :followers,
    through: :follows,
    source: :follower

  def genre_names
    genres = []
    self.genres.each do |genre|
      genres.push(genre.genre)
    end

    genres
  end

  def genres_by_id
    genres = []
    self.genres.each do |genre|
      genres.push(genre)
    end

    genres
  end

  def follower_ids
    followers = []
    self.followers.each do |follower|
      followers << follower.id
    end

    followers
  end

  def followed_by_current_user(current_user_id)
    self.followers.each do |follower|
      return true if follower.id == current_user_id
    end
    false
  end

  def self.top_results(query_param)
    param = query_param.downcase.split('')
    param = param.join('%')
    param = '%' + param + '%'
    Band.where('lower(band_name) LIKE ?', param).limit(5)
  end
end
