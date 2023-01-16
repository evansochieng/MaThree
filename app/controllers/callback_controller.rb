class CallbackController < ApplicationController
    def lipa_na_mpesa
        transaction = Mpesa::LipaNaMpesaCallback.new(
            #place a callback param to handle the method
        )
        if transaction.valid?
            # add database storage 

            #confirm if daraja has really gotten the payment sent by the customer
            render plain: transaction.confirmation_response
        else
            render plain:transaction.validation_error
        end
    end
end