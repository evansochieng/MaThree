class ChangeUsersToCommuters < ActiveRecord::Migration[6.1]
  # rename table users to commuters
  def change
    rename_table :users, :commuters
  end
end
