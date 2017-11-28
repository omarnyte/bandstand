class AddSongLocationToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :song_location, :string, null: false 
  end
end
