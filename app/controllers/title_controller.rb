class TitleController < ApplicationController
  def index
    render json: { title: 'API' }, status: :ok
  end
end