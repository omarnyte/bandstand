require 'rails_helper'

RSpec.describe Band, type: :model do
  it { should validate_presence_of(:band_name)}
  it { should validate_presence_of(:location)}
  it { should validate_presence_of(:mini_bio)}
  it { should validate_presence_of(:image_location)}
end
