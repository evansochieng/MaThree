class Route < ApplicationRecord
    # add associations
    has_many :commuters
    has_many :vehicles
    has_many :drivers
end
