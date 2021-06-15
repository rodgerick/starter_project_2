class Api::StuffsController < ApplicationController
  
  def index
    render json: Stuff.all
  end

end
