class Driver < ApplicationRecord
    # add associations
    has_many :vehicles
    has_many :routes, through: :vehicles

    # add validations
    validates :name, :id_number, :phone_number, :address, presence: true
end
