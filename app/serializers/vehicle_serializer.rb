class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :registration_number, :model, :description, :capacity
end
