class Admin < ApplicationRecord

    # for password confirmation
    has_secure_password

    # validates
    validates :username, :email, presence: true
    validates :password, length: {minimum: 8}
end
