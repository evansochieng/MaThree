class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :route, :pickup_station, :destination, :return_trip, :fare, :date
end
