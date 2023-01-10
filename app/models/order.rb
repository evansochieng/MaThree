class Order < ApplicationRecord
    # add associations
    belongs_to :commuter
    belongs_to :route
    belongs_to :vehicle

    # add validations
    validates :name, :phone_number, :route, :pickup_station, :destination, :return_trip, :fare, presence: true
end
