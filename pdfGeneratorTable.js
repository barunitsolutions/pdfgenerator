var PdfPrinter = require('pdfmake');
var fs = require('fs');

// Define font files
var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

function createTableWithString(str) {
    var ret = []
    var array1 = [];
    array1.length = 40;
    array1.fill('',0,array1.length);
    name = str.toUpperCase().split('');
    
    return ret.push( array1.map(function(current,index) { return name[index] ? name[index] : '' }));
    
    }

function createPANForm(str,fileName) {

    var ret = []
    var array1 = [];
    array1.length = 40;
    array1.fill('',0,array1.length);
    name = str.toUpperCase().split('');
    ret.push( array1.map(function(current,index) { return name[index] ? name[index] : '' }))
    
var printer = new PdfPrinter(fonts);

var docDefinition = {
    pageSize: 'A4',
    pageMargins: [10, 5, 10, 5],
    styles: {
        header: {
            fontSize: 8,
            bold: true,
            alignment : 'justify',
            margin : [0,0,0,20]
        },
        label: {
            fontSize: 8,
            bold: true,
            margin : [20,0,20,10]
        }
    },
    content: [
        {
           // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            // headerRows: 1,
            widths: '*',
    
            body: ret
          }
        }
      ]


};

var options = {
    // ...
}

var myTableLayouts = {
    exampleLayout: {
      hLineWidth: function (i, node) {
        if (i === 0 || i === node.table.body.length) {
          return 0;
        }
        return (i === node.table.headerRows) ? 2 : 1;
      },
      vLineWidth: function (i) {
        return 0;
      },
      hLineColor: function (i) {
        return i === 1 ? 'black' : 'gray';
      },
      paddingLeft: function (i) {
        return i === 0 ? 0 : 8;
      },
      paddingRight: function (i, node) {
        return (i === node.table.widths.length - 1) ? 0 : 8;
      }
    }
  };

var pdfDoc = printer.createPdfKitDocument(docDefinition, {tableLayouts: myTableLayouts});
pdfDoc.pipe(fs.createWriteStream(fileName));
pdfDoc.end();
}

createPANForm('Bharani dharan','documents/table.pdf');


