# == Schema Information
#
# Table name: genres
#
#  id    :integer          not null, primary key
#  genre :string           not null
#

class Genre < ApplicationRecord
  validates :genre, presence: true
end
