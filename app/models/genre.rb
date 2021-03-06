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
    return Band.all.sample(8) if genre == 'all'

    Genre.find_by('genre': genre).bands
  end
end
