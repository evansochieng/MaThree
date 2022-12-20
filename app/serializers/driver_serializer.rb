class DriverSerializer < ActiveModel::Serializer
  attributes :id, :name, :id_number, :phone_number, :address
end
