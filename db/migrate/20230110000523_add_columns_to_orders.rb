class AddColumnsToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :commuter_id, :integer
    add_column :orders, :route_id, :integer
    add_column :orders, :vehicle_id, :integer
  end
end
