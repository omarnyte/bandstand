# == Schema Information
#
# Table name: genres
#
#  id    :integer          not null, primary key
#  genre :string           not null
#

class Genre < ApplicationRecord
  validates :genre, presence: true

  has_many :band_genres
  has_many :bands, :through => :band_genres

  # def self.bands_by_genre(param)
  #   if param == 'all'
  #     bands = Band.all
  #     bands.sample(10)
  #   else
  #     Genre.find_by("genre": param).bands
  #   end
  # end

  def self.bands_by_genre(genre)
    genres = {
      'grunge' => 21,
      'hip hop' => 24,
      'house' => 25,
      'indie' => 26,
      'metal' => 31,
      'pop' => 33,
      'rap' => 40,
      'R&B' => 44,
      'rock' => 45
    }
    if genre == 100
      bands = Band.all
      bands.sample(10)
    else
      Genre.find(genres[genre]).bands
    end
  end

  def self.bands_by_genreId(id)
    Genre.find(id).bands
  end

end
