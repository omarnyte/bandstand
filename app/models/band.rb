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

  has_many :albums
  has_many :songs, through: :albums
end
