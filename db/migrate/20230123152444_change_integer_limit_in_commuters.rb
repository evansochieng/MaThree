class ChangeIntegerLimitInCommuters < ActiveRecord::Migration[6.1]
  def change
    change_column :commuters, :phone_number, :integer, limit: 8
  end
end
