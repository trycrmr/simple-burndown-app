var $ = require('jquery');
var dt = require('datatables.net');
require('datatables.net-dt/css/jquery.dataTables.css');
$.DataTable = dt;

$(document).ready(function() {
  
  var timeEntryTable = $('#datatable').DataTable({
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

  $('#datatable tbody').on( 'click', 'td', function () {
    var cellData = timeEntryTable.cell( this ).data();
    var idx = timeEntryTable.cell( this ).index().column;
    var title = timeEntryTable.column( idx ).header();
    var titleText = $(title).text();
    console.log('title', title);
    console.log('titleText', titleText);
    console.log(`${titleText}: ${cellData}`);
  } );

  console.log('timeEntryTable', timeEntryTable);

});