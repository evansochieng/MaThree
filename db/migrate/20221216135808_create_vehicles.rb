class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.integer :registration_number
      t.string :model
      t.string :description
      t.integer :capacity

      t.timestamps
    end
  end
end
