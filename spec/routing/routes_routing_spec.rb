require "rails_helper"

RSpec.describe RoutesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/routes").to route_to("routes#index")
    end

    it "routes to #show" do
      expect(get: "/routes/1").to route_to("routes#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/routes").to route_to("routes#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/routes/1").to route_to("routes#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/routes/1").to route_to("routes#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/routes/1").to route_to("routes#destroy", id: "1")
    end
  end
end
