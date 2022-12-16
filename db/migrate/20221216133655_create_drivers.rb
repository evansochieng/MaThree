class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :id_number
      t.integer :phone_number
      t.string :address

      t.timestamps
    end
  end
end
