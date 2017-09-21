class UserController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = set.new(user_params)

    if @user.save
      redirect_to @user, notice: "user successfully saved"
    else
      render :new, status: 422
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render 'show'
    else
      render 'edit'
    end
  end

  def destroy
    user = User.find(params[:id])
  end

  private

  def user_params
   params.require(:user).permit(:username, :email, :password)
  end
end
