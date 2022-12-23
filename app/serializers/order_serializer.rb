class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name_id, :phone_number_id, :route, :pickup_station, :destination, :return_trip, :fare_id
end
