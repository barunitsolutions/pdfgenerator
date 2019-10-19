module.exports = class FormHeader {

    constructor() {

        return {
            body :[[
                {stack: [
                    {text:'Form No. 49A', fontSize:'12'},
                    {text:'Application for Allotment of Permanent Account Number'},
                    {text:'[In the case of Indian Citizens/Indian Companies/Entities incorporated in India/'},
                    {text: 'Unincorporated entities formed in India]'},
                    {text: 'See Rule 114'}
                ]}
            ],
        [{text : 'Assessing officer (AO code)', alignment:'left'}],
        [ {table : {
            widths: this.returnWidthArray(20),
            heights : 15,
            body:[ 
            [{text:'Area Code', colSpan :3, alignment:'center'},{},{},
            {text:'AO Type', colSpan:2, alignment:'center'},{},
            {text:'Range Code', colSpan :3, alignment:'center'},{},{},
            {text:'AO No.', colSpan:2, alignment:'center'},{}],
            [{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''}],
         ]
        }} ]
    ]
            
        }
    }

    returnWidthArray(cellWidth){

        var arr = [];
        arr.length = 10;
        arr.fill(cellWidth,0,arr.length);

        return arr;
    }
}