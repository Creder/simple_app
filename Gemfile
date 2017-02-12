source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end



gem 'rails', '5.0.1'
gem 'cloudinary'
gem 'attachinary'
gem 'carrierwave', '~> 1.0'
gem 'dropzonejs-rails'
gem 'fabricjs-rails'
gem 'bcrypt'
gem 'faker'
gem 'bootstrap-sass'
gem 'puma'
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'jquery-rails'
gem 'jquery-fileupload-rails'
gem 'turbolinks' 
gem 'jbuilder'


group :development, :test do
  gem 'sqlite3'
  gem 'byebug', platform: :mri
  gem 'rails-controller-testing'
end

group :development do
  
  gem 'web-console'
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
end

group :production do
  gem 'pg'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
