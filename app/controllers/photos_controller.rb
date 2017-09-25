require 'pry'

class PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    render json: @photo
  end

  def create
    encoded_string = params[:base64].split(',')[1]
    image_type = params[:base64].split(',')[0][5..-8]
    @photo = Photo.new
    @photo.set_image(image_type, encoded_string)
    @photo.caption = params[:caption]
    @photo.save
    render json: @photo
  end

  def destroy
    @photo.destroy
    redirect_to root_path
  end

private
  def photo_params
    params.require(:photo).permit(:user_id, :photo, :caption)
  end
end
