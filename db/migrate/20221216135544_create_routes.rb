class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :description
      t.date :date

      t.timestamps
    end
  end
end
