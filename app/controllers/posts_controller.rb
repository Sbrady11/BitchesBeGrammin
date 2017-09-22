class PicController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
  end
  
  def index
    # @posts = Post.all
  end

private
  def post_params
    params.require(:post).permit(:pic, :caption)
  end


end
