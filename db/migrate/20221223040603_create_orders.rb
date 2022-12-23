class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name_id
      t.integer :phone_number_id
      t.string :route
      t.string :pickup_station
      t.string :destination
      t.string :return_trip
      t.integer :fare_id

      t.timestamps
    end
  end
end
