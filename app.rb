require "sinatra"
require "pry"

class Konsole < Sinatra::Base
  get "/" do
  	erb :index
  end

  get "/todos" do
  	Todo.all.to_json
  end

  get "/todo/:id" do
  	Todo.find(params[:id]).to_json
  end

  post "/todos" do
  	u = Todo.new(params[:todo])
  	u.save
    u.to_json
  end

  put "/todos" do
  	u = Todo.find(params[:id])
  	u = u.update_attributes(params[:todo])
  	u.save
    u.to_json
  end
end

# mongoid setup
require "mongoid"
Mongoid.load!("./mongoid.yml")

class Todo
  include Mongoid::Document
  field :item, type: String
  field :status, type: String
end