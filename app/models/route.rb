class Route < ApplicationRecord
    # add associations
    has_many :commuters
    has_many :vehicles
    has_many :drivers, through: :vehicles

    # add validates
    validates :name, :from, :to, :description, :fare, presence: true
end
