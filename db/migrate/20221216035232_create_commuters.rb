class CreateCommuters < ActiveRecord::Migration[6.1]
  def change
    create_table :commuters do |t|
      t.string :name
      t.integer :phone_number
      t.string :address

      t.timestamps
    end
  end
end
