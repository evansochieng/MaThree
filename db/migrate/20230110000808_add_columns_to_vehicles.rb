class AddColumnsToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :driver_id, :integer
    add_column :vehicles, :route_id, :integer
  end
end
