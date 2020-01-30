require 'spec_helper'
require 'rails_helper'

describe User do

  it { should have_many :albums }


end
