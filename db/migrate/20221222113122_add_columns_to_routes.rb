class AddColumnsToRoutes < ActiveRecord::Migration[6.1]
  def change
    add_column :routes, :from, :string
    add_column :routes, :to, :string
    add_column :routes, :fare, :integer
    remove_column :routes, :date
  end
end
