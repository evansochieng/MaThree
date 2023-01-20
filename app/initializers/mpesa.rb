 require 'base64'
require 'httparty'
require "excon"


 
 consumer_secret = 'KCgjO3fXgFC52jRm'
 consumer_key = 'jmvlKJBGNySksZXoTaKPPwxdT92fvCVk'


 def base64Encoded key,secret
    data = Base64.encode64(key + ':' + secret).gsub(/\n/, '')
    return data
 end


token = "Basic "+   base64Encoded(consumer_key,consumer_secret)

puts token

puts base64Encoded(consumer_key,consumer_secret) 


 
url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
headers = {
  Authorization: token
}

response = HTTParty.get(url, headers: headers)
puts response.code

accessToken = JSON.parse(response.body)["access_token"]

 
puts accessToken

def createTimestamp


  year = Time.now

  date = year.to_s.split(' ')[0].split('-').join('')

  date_two = year.to_s.split(' ')[1].split(':').join('')
  return "#{date}#{date_two}"

end

time = createTimestamp
# puts accessToken
 password = Base64.strict_encode64("174379" + "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" + time)

 puts password

body = {
    "BusinessShortCode"=> 174379,
    "Password"=> password,
    "Timestamp"=> time,
    "TransactionType"=> "CustomerPayBillOnline",
    "Amount"=> 1,
    "PartyA"=> 254704999704,
    "PartyB"=> 174379,
    "PhoneNumber": 254704999704,
    "CallBackURL"=> "https://mydomain.com/path",
    "AccountReference"=> "Mathree",
    "TransactionDesc"=> "Payment of X" 
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

puts data