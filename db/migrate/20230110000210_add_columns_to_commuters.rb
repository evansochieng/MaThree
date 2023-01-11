class AddColumnsToCommuters < ActiveRecord::Migration[6.1]
  def change
    add_column :commuters, :route_id, :integer
    add_column :commuters, :vehicle_id, :integer
  end
end
