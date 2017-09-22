class PhotosController < ApplicationController

  def index
    @photo = Photo.all
  end

  def show
  end

  def new
    @photo = Photo.new
  end

  def create
    if @photo = Photo.create(Photo_params)
      flash[:success] = "photo added"
      redirect_to Photos_path
    else
      flash.now[:alert] = "Error, please try again"
      render :new
    end
  end

  def edit
  end

  def update
    if @photo.update(photo_params)
      redirect_to photos_path
    else
      render :edit
    end
  end

  def destroy
    @photo.destroy
    redirect_to root_path
  end


private
  def photo_params
    params.require(:photo).permit(:pic, :caption)
  end
end
