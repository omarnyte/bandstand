class CreateBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :band_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :bands, :username, unique: true
    add_index :bands, :email, unique: true
    add_index :bands, :band_name, unique: true
  end
end
