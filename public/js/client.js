var $ = require('jquery');
var dt = require( 'datatables.net' );
$.DataTable = dt;

$(document).ready(function() {
  $('#datatable').DataTable();
} );