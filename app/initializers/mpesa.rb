 require 'base64'
require 'httparty'
 
 consumer_secret = 'aTR6K5ieXGjGfjZs'
 consumer_key = 'o8LLYzoepin0GWgwhPA8eD8xOaZ5yFzE'


 def base64Encoded secret,key
    data = Base64.encode64(secret + ':' + key).gsub(/\n/, '')
    return data
 end

token = "Basic "+   base64Encoded(consumer_secret,consumer_key)

puts token

 
url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
headers = {
  Authorization: "Basic cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ"
}

response = HTTParty.get(url, headers: headers)
puts response.body 



lipa_na_mpesa = Mpesa::Client.new(key:consumer_key, secret:consumer_secret, environment:"sandbox")

transaction = lipa_na_mpesa.stk(
  shortcode:"174379"
  pass_key:"bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
  amount: 1,
  phone_number: "254794329992",
  callback_url: "https://example.com/callback",
  account_reference: "Invoice Payment",
  transaction_desc: "Testing Lipa Na Mpesa"
)

# check if transaction was successful
if transaction.successful?
  puts transaction.transaction_id
else
  puts transaction.error_message
end