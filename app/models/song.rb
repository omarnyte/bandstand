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

class Song < ApplicationRecord
  validates :album_id, :title, :track_index, presence: true
  validates :title, :track_index, uniqueness: {
    scope: :album_id,
    message: 'Track index number must be unique within an album'
  }

  belongs_to :album

  def self.top_results(query_param)
    param = '%' + query_param.downcase + '%'
    Song.where('lower(title) LIKE ?', param).limit(5)
  end

  def image_location
    self.album.image_location
  end

  def album_name
    self.album.name 
  end
end
