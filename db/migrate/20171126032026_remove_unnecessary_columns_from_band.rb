class RemoveUnnecessaryColumnsFromBand < ActiveRecord::Migration[5.1]
  def change
    remove_column :bands, :username 
    remove_column :bands, :email
    remove_column :bands, :password_digest
    remove_column :bands, :session_token
  end
end
