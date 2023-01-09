class Driver < ApplicationRecord
    # add associations
    has_one :vehicle
    belongs_to :route
end
