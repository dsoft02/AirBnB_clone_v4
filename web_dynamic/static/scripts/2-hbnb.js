$('document').ready(() => {
  const checkedAmenities = {};

  $('div.amenities li input').change(
    function () {
      if ($(this).is(':checked')) {
        checkedAmenities[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete checkedAmenities[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(checkedAmenities).join(', ') || '&nbsp;');
    });

  const url = 'http://' + window.location.hostname + '/api/v1/status';
  $.get(url, (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
