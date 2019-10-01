var PdfPrinter = require('pdfmake');
var fs = require('fs');
var fItem = require('./fieldItem.js')
var sItem = require('./sectionItem.js')

// Define font files
var fonts = {
    // Roboto: {
    //     normal: 'fonts/Roboto-Regular.ttf',
    //     bold: 'fonts/Roboto-Medium.ttf',
    //     italics: 'fonts/Roboto-Italic.ttf',
    //     bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    // },
    OpenSans: {
        normal: 'fonts/OpenSans-Regular.ttf',
        bold: 'fonts/OpenSans-Bold.ttf',
        italics: 'fonts/OpenSans-Italic.ttf',
        bolditalics: 'fonts/OpenSans-BoldItalic.ttf'
    },
    Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
      },
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
      },
      Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
      },
      Symbol: {
        normal: 'Symbol'
      },
      ZapfDingbats: {
        normal: 'ZapfDingbats'
      }
};

function createPANForm( firstname, middlename, lastname, fileName) {
this. fileName = fileName;
this.firstname = firstname.toUpperCase();
this.middlename = middlename.toUpperCase();
this.lastname = lastname.toUpperCase();

var printer = new PdfPrinter(fonts);

var docDefinition = {
    defaultStyle: {
        font: 'Helvetica',
        alignment : 'justify',
        fontSize : 14
      },
    pageSize: 'A4',
    pageMargins: [10, 5, 10, 5],
    styles: {
        header: {
            fontSize: 12,
            bold: true,
            alignment : 'justify',
            margin : [0,0,0,20]
        },
        label: {
            fontSize: 10,
            // bold: true,
            margin : [20,0,20,10]
        },
        sectionHeader: {
            fontSize: 10,
            bold: true,
            margin : [20,0,20,10],
            font: 'OpenSans'
        }
    },
    content: [ {
        stack: [
            {text:'Form No. 49A'},
            {text:'Application for Allotment of Permanent Account Number'},
            {text:'[In the case of Indian Citizens/Indian Companies/Entities incorporated in India/'},
            {text: 'Unincorporated entities formed in India]'}
        ],
        style: 'header',
        alignment : 'center'},

        // {columns : new sItem(1,'First Section',[{label:'First Name',value:'Bharani'}])},
        {columns : new sItem(1,'Full Name (Full exapanded name to be mentioned as appearing in proof of identity/address documents : initals are not permitted)',
                    [{label:'Last Name/Surname',value:'Ganeshan'},
                    {label:'First Name',value:'Bharanidharan'},
                    {label:'Middle Name',value:''},
                    ]
            )
        },
        {columns : new sItem(2,'Abbreviations of the above name, as you would like it, to be printed on the PAN card',
        [{label:'Last Name/Surname',value:'Ganeshan'},
        {label:'First Name',value:'Bharanidharan'},
        {label:'Middle Name',value:''},
        ]
)
}
        
        ],


};

var options = {
    // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream(fileName));
pdfDoc.end();
}
createPANForm('Bharani','','Ganeshan','documents/sample2.pdf');

// console.log(new fItem(50,'First Name',40,[0,0,0,5],'Bharanidharan'));