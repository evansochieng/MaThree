require "rails_helper"

RSpec.describe VehiclesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/vehicles").to route_to("vehicles#index")
    end

    it "routes to #show" do
      expect(get: "/vehicles/1").to route_to("vehicles#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/vehicles").to route_to("vehicles#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/vehicles/1").to route_to("vehicles#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/vehicles/1").to route_to("vehicles#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/vehicles/1").to route_to("vehicles#destroy", id: "1")
    end
  end
end
