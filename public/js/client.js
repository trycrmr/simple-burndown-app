var $ = require('jquery');
var dt = require( 'datatables.net' );
$.DataTable = dt;

$(document).ready(function() {
  
  $('#datatable').DataTable({
    dom: "Bflrtip",
    responsive: true,
    ajax: {
      url: "/data",
      dataSrc: function(json) {
        if (!json) {
          json = [];
        }
        return json;
      }
    },
    columns: [
      { data: "date" },
      { data: "time" },
      { data: "project" },
      { data: "person" },
      { data: "type" }
    ]
  });

});