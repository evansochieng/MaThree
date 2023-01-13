class DeleteAssociationColumnsFromCommuters < ActiveRecord::Migration[6.1]
  def change
    remove_column :commuters, :route_id
    remove_column :commuters, :vehicle_id
  end
end
