# Rails with integrated Angular

Deployable as single container to heroku

## Steps to reproduce

### rails new rails-with-integrated-angular --webpack=angular -T
-T so that we can use rspec instead, see https://stackoverflow.com/questions/6728618/how-can-i-tell-rails-to-use-rspec-instead-of-test-unit-when-creating-a-new-rails

... somehow "--webpack=angular" didn't work, so I had to also do

`rails webpacker:install`

`rails webpacker:install:angular`

### create RootController
See https://github.com/MilenaMMay/rails-with-integrated-angular/commit/361d7d529f22b66c635d5dd2b8e5e8ed3747acc1

### Use postgres to be able to deploy on heroku

### Specify yarn version for webpacker
!!! IMPORTANT !!!
you also need to add the buildpack nodejs to heroku - otherwise this
config is not read:

heroku buildpacks:add --index 1 heroku/nodejs

### Let angular call rails
See https://github.com/MilenaMMay/rails-with-integrated-angular/commit/1ca4a73e6b04b1d5db54935783b827345511c50b  

## Deploy to heroku

`heroku git:remote -a [heroku-app-name]`
`git push heroku master`
