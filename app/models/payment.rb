class Payment < ApplicationRecord
    # add associations
    belongs_to :commuter

    # add validations
    validates :commuter_id, :amount, :time, presence: true
end
