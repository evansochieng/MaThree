class Vehicle < ApplicationRecord
    # add associations
    belongs_to :driver
    belongs_to :route
    has_many :commuters

    # validations
    validates :registration_number, :model, :capacity, :description, :route_id, :driver_id, presence: true
end
