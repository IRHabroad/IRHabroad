$(document).ready(function () {
    $('#currency-select').select2({
      templateResult: formatCurrency
    });
  
    function formatCurrency(option) {
      if (!option.id) {
        return option.text;
      }
  
      var $option = $(
        '<span><img src="' + $(option.element).data('image') + '" class="currency-icon" /> ' + option.text + '</span>'
      );
  
      return $option;
    }
  });
  