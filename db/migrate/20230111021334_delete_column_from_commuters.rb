class DeleteColumnFromCommuters < ActiveRecord::Migration[6.1]
  def change
    remove_column :commuters, :address
  end
end
