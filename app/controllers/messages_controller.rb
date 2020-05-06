class MessagesController < ApplicationController
  def index
  end

  def create
    @message = @group.message.new(message_params)
    if @message.save
      respond_to do |format|
          format.json
      end
    else
      @message = @group.message.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index

  private
  def message_params
    params.require(:message).parmit(:content)
end
