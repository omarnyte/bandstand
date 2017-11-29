# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  belongs_to :follower, foreign_key: :follower_id, class_name: :User
  belongs_to :followee, foreign_key: :followee_id, class_name: :Band
end