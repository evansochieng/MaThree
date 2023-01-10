class Commuter < ApplicationRecord
    # add associations
    belongs_to :route
    belongs_to :vehicle

    # for password confirmation
    has_secure_password

    # add validations
    validates :name, :phone_number, :id_number, :address, presence: true
    validates :password, length: {minimum: 8}
    validates :username, uniqueness: true, presence: true
end
