class CreateBandGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :band_genres do |t|
      t.integer :band_id, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
    add_index :band_genres, :band_id
    add_index :band_genres, :genre_id
  end
end
