class AddIdNumberToCommuters < ActiveRecord::Migration[6.1]
  def change
    add_column :commuters, :id_number, :integer
  end
end
