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

end
