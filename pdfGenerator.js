var PdfPrinter = require('pdfmake');
var fs = require('fs');
var fItem = require('./fieldItem.js')
var sItem = require('./sectionItem.js')
var lPhotoMatrix = require('./leftPhotoMatrix.js')
var rPhotoMatrix = require('./rightPhotoMatrix.js')
var formHeader = require('./formHeader.js') 
var thumImpression = require('./thumbImpression.js')
// Define font files
var fonts = {
    // Roboto: {
    //     normal: 'fonts/Roboto-Regular.ttf',
    //     bold: 'fonts/Roboto-Medium.ttf',
    //     italics: 'fonts/Roboto-Italic.ttf',
    //     bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    // },
    Fontello :{
      normal: 'fonts/fontello/font/fontello.ttf',
      bold: 'fonts/fontello/font/fontello.ttf',
      italics: 'fonts/fontello/font/fontello.ttf',
      bolditalics: 'fonts/fontello/font/fontello.ttf'
    },
    Baskerville : {
      bold : 'fonts/LibreBaskerville-Bold.ttf',
      italics: 'fonts/LibreBaskerville-Italic.ttf',
      normal : 'fonts/LibreBaskerville-Regular.ttf'
    },
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
        font: 'OpenSans',
        alignment : 'justify',
        fontSize : 12
      },
    pageSize: 'A4',
    pageMargins: [30, 20, 30, 20],
    styles: {
        header: {
            fontSize: 8,
            bold: true,
            alignment : 'justify',
            margin : [0,0,0,10]
        },
        label: {
            fontSize: 8,
            // bold: true,
            margin : [10,0,20,10]
        },
        sectionHeader: {
            fontSize: 8,
            bold: true,
            margin : [0,0,20,10],
            font: 'Helvetica'
        },
        icon : {
          font : 'Fontello',
          
        }
    },
    content: [{columns :[
      {width: 100, table : new lPhotoMatrix()},
      {width : '*',
      margin : [10,0,10,10],
      layout : 'noBorders',
       table : new formHeader() ,
        
        style: 'header',
        alignment : 'center'},
        {width: 100, table : new rPhotoMatrix()}
    ]},{

      columns : [
        {stack: [{text:'Sir,'},
        {text:'I/We hereby request that a permanent account number to be alloted to me/us.'},
        {text:'I/We give below necessary particulars:'},
        ],fontSize:8, margin:[0,30,0,0]},
        {width: 200,table : new thumImpression(), margin:[0,0,0,10],}
      ]
    },

        // {columns : new sItem(1,'First Section',[{label:'First Name',value:'Bharani'}])},
        {columns : new sItem(1,'Full Name (Full exapanded name to be mentioned as appearing in proof of identity/address documents : initals are not permitted)',
                    [{label:[{text:'Please select title,  '},{text:  ''  ,style: 'icon'},{text:' as applicable',style:'label'}],
      
                 value:[{text:'Shri', checked:true},{text:'Smt.'},{text:'Kumari'},{text:'M/s'}],fieldType: 'checkbox'},
                    
                    {label:'Last Name/Surname',value:'Ganeshan',fieldType: 'table'},
                    {label:'First Name',value:'Bharanidharan',fieldType: 'table'},
                    {label:'Middle Name',value:'',fieldType: 'table'},
                    ]
            )
        },
        {columns : new sItem(2,'Abbreviations of the above name, as you would like it, to be printed on the PAN card',
        [{label:'Last Name/Surname',value:'Ganeshan',fieldType: 'table'},
        {label:'First Name',value:'Bharanidharan',fieldType: 'table'},
        {label:'Middle Name',value:'',fieldType: 'table'},
        ]
)
},
 
        
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