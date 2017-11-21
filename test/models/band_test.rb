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

require 'test_helper'

class BandTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
