# == Schema Information
#
# Table name: songs
#
#  id            :integer          not null, primary key
#  album_id      :integer          not null
#  title         :string           not null
#  track_index   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  song_location :string           not null
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
