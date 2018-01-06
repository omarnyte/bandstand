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

require 'test_helper'

class BandGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
