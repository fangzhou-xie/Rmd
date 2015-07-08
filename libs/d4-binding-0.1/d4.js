HTMLWidgets.widget({

  name: 'd4',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {

    var columnChart = d4.charts.column();

    d3.select('#' + el.id)
      .datum(x.data)
      .call(columnChart);

  },

  resize: function(el, width, height, instance) {

  }

});
