class Order < ApplicationRecord
    # # add associations
    # belongs_to :commuter
    # belongs_to :route
    # belongs_to :vehicle

    # add validations
    validates :name, :route, :pickup_station, :destination, :return_trip, :fare, :date, presence: true
    #validates :name, :route, :pickup_station, :destination, :return_trip, :fare, :commuter_id, :route_id, :vehicle_id, presence: true
    validates :phone_number, length: { is: 12}, presence: true
end
