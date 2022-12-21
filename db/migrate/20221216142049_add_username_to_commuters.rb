class AddUsernameToCommuters < ActiveRecord::Migration[6.1]
  def change
    add_column :commuters, :username, :string
  end
end
