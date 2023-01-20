require 'base64'
require 'httparty'
require "excon"

class MpesaController < ApplicationController

    # create an action to handle mpesa transaction
    def initiate_payment
        
        consumer_secret = 'KCgjO3fXgFC52jRm'
        consumer_key = 'jmvlKJBGNySksZXoTaKPPwxdT92fvCVk'


        def base64Encoded key,secret
            data = Base64.encode64(key + ':' + secret).gsub(/\n/, '')
            return data
        end


        token = "Basic "+   base64Encoded(consumer_key,consumer_secret)


        
        url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
        headers = {
        Authorization: token
        }

        response = HTTParty.get(url, headers: headers)

        accessToken = JSON.parse(response.body)["access_token"]


        def createTimestamp


        year = Time.now

        date = year.to_s.split(' ')[0].split('-').join('')

        date_two = year.to_s.split(' ')[1].split(':').join('')
        return "#{date}#{date_two}"

        end

        time = createTimestamp
        # puts accessToken
        password = Base64.strict_encode64("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + time)

        # puts params
        puts "The params are: #{params}"
        puts "The phone number are: #{params[:phone_number]}"
        puts "The params are: #{params[:fare]}"

        body = {
            "BusinessShortCode"=> 174379,
            "Password"=> password,
            "Timestamp"=> time,
            "TransactionType"=> "CustomerPayBillOnline",
            "Amount"=> params[:fare],
            "PartyA"=> params[:phone_number],
            "PartyB"=> 174379,
            "PhoneNumber": params[:phone_number],
            "CallBackURL"=> "https://mydomain.com/path",
            "AccountReference"=> "Mathree",
            "TransactionDesc"=> "Payment of ride" 
        }

        headers = {
        "Authorization"=> "Bearer " + accessToken,
        "Content-Type" => "application/json"
        }

        # res = HTTParty.post(
        #   "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest", 
        #   :query => body,
        #   :headers => headers
        # )

        response=Excon.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",:body=>JSON.generate(body),headers:{'Content-Type': 'application/json','Authorization': "Bearer #{accessToken}"})
        data=JSON.parse(response.body)
        render json: data

        #puts "The response is: #{data}"

    end

    # handle response after mpesa prompt
    def payment_response
        mpesa_response = params[:body]
        render json: mpesa_response
    end

    # private
    # # only allow the phone number of the commuter and the amount to be paid
    # def payment_params
    #     params.permit(:phone_number, :fare)
    # end
end
