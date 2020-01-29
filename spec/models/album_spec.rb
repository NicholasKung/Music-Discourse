require 'spec_helper'
require 'rails_helper'

describe Album do

  it { should have_valid(:album).when("(What's the Story) Morning Glory?") }
  it { should_not have_valid(:album).when(nil, "") }

  it { should have_valid(:art).when("https://upload.wikimedia.org/wikipedia/en/1/17/Wonderwall_cover.jpg") }
  it { should_not have_valid(:art).when(nil) }

  it { should have_valid(:artist).when("Oasis") }
  it { should_not have_valid(:artist).when(nil, "") }

  it { should have_valid(:year).when(1995) }
  it { should_not have_valid(:year).when(nil, "") }

  it { should have_valid(:genre).when("BritPop") }
  it { should_not have_valid(:genre).when(nil, "") }
end
