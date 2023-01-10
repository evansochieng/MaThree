class RenameColumnNamesOfPayments < ActiveRecord::Migration[6.1]
  def change
    rename_column :payments, :user_id, :commuter_id
  end
end
