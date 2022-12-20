require "rails_helper"

RSpec.describe DriversController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/drivers").to route_to("drivers#index")
    end

    it "routes to #show" do
      expect(get: "/drivers/1").to route_to("drivers#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/drivers").to route_to("drivers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/drivers/1").to route_to("drivers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/drivers/1").to route_to("drivers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/drivers/1").to route_to("drivers#destroy", id: "1")
    end
  end
end
