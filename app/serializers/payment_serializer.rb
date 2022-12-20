class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :time, :user_id
end
