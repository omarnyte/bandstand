class AddColumnsToBand < ActiveRecord::Migration[5.1]
  def change
    add_column :bands, :location, :string, null: false
    add_column :bands, :mini_bio, :string, null: false
    add_column :bands, :image_location, :string, null: false
  end
end
