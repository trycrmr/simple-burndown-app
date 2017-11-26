var $ = require('jquery');
var dt = require('datatables.net');
let update = require('./update');
require('datatables.net-dt/css/jquery.dataTables.css');
$.DataTable = dt;

$(document).ready(function() {
  
  var timeEntryTable = $('#datatable').DataTable({
    dom: "Bflrtip",
    responsive: true,
    ajax: {
      url: "/api/data",
      dataSrc: function(json) {
        if (!json) {
          json = [];
        }
        return json;
      }
    },
    columns: [
      { data: "saved" },
      { data: "date" },
      { data: "time" },
      { data: "project" },
      { data: "person" },
      { data: "type" },
      { data: "Delete" },
    ],
    "columnDefs": [
      {
        "defaultContent": "-",
        "className": "dt-center",
        "targets": "_all"
      },
      {
        render: function ( data, type, row ) {
          return `<button id='#deleteThisRow'>Delete</button>`;
        },
        targets: 6
      },
      {
        render: function ( data, type, row ) {
          if(row.id) {
            return 'Yes'
          } else {
            return 'No'
          }
        },
        targets: 0
      }
    ]
  });

  $('#datatable tbody').on('click', 'td', function () {
    var cellData = timeEntryTable.cell(this).data();
    var idx = timeEntryTable.cell(this).index().column;
    var title = timeEntryTable.column( idx ).header();
    var titleText = $(title).text();
    
    if( $(this).find('input').length ) {
      $(this).blur();
    } else {
      $(this).html(`<input value='${cellData}' />`);
      $(this).children('input').focus();
    }

//     console.log(
// `
// ${titleText}
// ${cellData}
// `
// );
  });

  $('#datatable tbody').on('blur', 'td', function () {
    var newCellValue = $(this).children('input').val();
    var cellData = timeEntryTable.cell(this).data(newCellValue).draw(false);
    // var cellData = $(this).children('input').val();
    // $(this).html(`${cellData}`);
    var rowData = timeEntryTable.row(this).data();
    
    update(rowData, 'time')
    .then(results => { 
      console.log('done!');

    })
    .catch(err => {console.log(err);});

  })


  $('#addRow').on( 'click', () => {
    var newRow = timeEntryTable.row.add([]).draw(false);
    var nextRowIdx = newRow.row().index();
    console.log('nextRowIdx', nextRowIdx);
  })

  console.log('timeEntryTable', timeEntryTable);

});