// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//= require semantic-ui
//= require jquery

$(document).on('turbolinks:load', function () {
    $('.ui.dropdown').dropdown();
})

