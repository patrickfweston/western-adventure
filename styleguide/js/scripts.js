(function ($, Drupal) {
  Drupal.behaviors.load_animation = {
    attach: function (context, settings) {
      $('.hero__text').addClass('loaded');
    }
  };
})(jQuery, Drupal);