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

require 'test_helper'

class BandTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
