HTMLWidgets.widget({

  name: 'mapbox',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {

    L.mapbox.accessToken = x.access_token;
    var mapboxTiles = L.tileLayer(
      'https://api.mapbox.com/v4/' +
      x.map_id +
      '/{z}/{x}/{y}.png?access_token=' +
      L.mapbox.accessToken, {
        attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
      }
    );

    var map = L.map(el.id)
        .addLayer(mapboxTiles)
        .setView([35.69, 139.69], 4);

  },

  resize: function(el, width, height, instance) {

  }

});
