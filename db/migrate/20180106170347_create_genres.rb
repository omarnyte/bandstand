class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
    end
    add_index :genres, :genre, unique: true
  end
end
