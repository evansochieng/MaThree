class RouteSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :from, :to, :fare
end
