# == Schema Information
#
# Table name: albums
#
#  id             :integer          not null, primary key
#  band_id        :integer          not null
#  name           :string           not null
#  description    :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  image_location :string           not null
#

class Album < ApplicationRecord
  validates :band_id, :name, :description, presence: true
  validates :name, uniqueness: {
    scope: :band_id,
    message: 'You already have an album with that name.'
  }

  belongs_to :band
  has_many :songs

  def self.top_results(query_param)
    param = '%' + query_param.downcase + '%'
    Album.where('lower(name) LIKE ?', param).limit(5)
  end

  def band_name
    self.band.band_name 
  end

end
