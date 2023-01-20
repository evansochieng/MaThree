class ChangeIntegerLimitInOrders < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :phone_number, :integer, limit: 8
  end
end
