class RegistrationsController < Devise::RegistrationsController
  # set devise to use json 
    respond_to :json
end
