class AddImagesToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :image_location, :string, null: false 
  end
end
