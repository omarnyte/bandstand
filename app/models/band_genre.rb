# == Schema Information
#
# Table name: band_genres
#
#  id         :integer          not null, primary key
#  band_id    :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BandGenre < ApplicationRecord
  belongs_to :band
  belongs_to :genre
end
