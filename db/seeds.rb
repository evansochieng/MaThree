# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed the db with data for routes
route1 = Route.create(
    name: "Thika Road 1", from: "Thika", to: "UpperHill", 
    description: "Route from Thika town, through Thika Road, upto UpperHill and its environments.",
    fare: 250
)

route2 = Route.create(
    name: "Waiyaki Way 1", from: "Kikuyu", to: "UpperHill", 
    description: "Route from Kikuyu town, through Waiyaki Way, upto UpperHill and its environments.",
    fare: 160
)

route3 = Route.create(
    name: "Jogoo Road 1", from: "Donholm", to: "UpperHill", 
    description: "Route from Donholm, through Jogoo Road, upto UpperHill and its environments.",
    fare: 150
)

route4 = Route.create(
    name: "Mombasa Road 1", from: "Kitengela", to: "UpperHill", 
    description: "Route from Kitengela, through Mombasa Road, upto UpperHill and its environments.",
    fare: 200
)

route5 = Route.create(
    name: "Lang'ata Road 1", from: "Rongai", to: "Westlands", 
    description: "Route from Ongata Rongai, through Lang'ata Road, UpperHill, upto Westlands and its environments.",
    fare: 300
)