class Commuter < ApplicationRecord
    # add associations
    belongs_to :route
    belongs_to :vehicle
end
