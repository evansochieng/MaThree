class ChangeColumnNamesOfOrders < ActiveRecord::Migration[6.1]
  def change
    rename_column :orders, :name_id, :name
    rename_column :orders, :phone_number_id, :phone_number
    rename_column :orders, :fare_id, :fare
  end
end
