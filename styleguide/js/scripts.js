(function ($, Drupal) {
  Drupal.behaviors.load_animation = {
    attach: function (context, settings) {
      $(window).load(function() {
        $('.hero__text').addClass('loaded');
      });
    }
  };
})(jQuery, Drupal);