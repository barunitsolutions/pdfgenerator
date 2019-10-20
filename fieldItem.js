
module.exports = class FieldItem{

    constructor(fieldLabelWidth,fieldLabel,fieldLength,fieldMargin,fieldValue,fieldType){

        this.fieldLabel = fieldLabel;
        this.fieldLength = fieldLength;
        this.fieldMargin = fieldMargin;
        this.fieldValue = fieldValue;
        this.fieldLabelWidth = fieldLabelWidth;
        this.fieldType = fieldType;
        // this.obj;
       
      switch (this.fieldType) {
          case 'table':
                return [{width: this.fieldLabelWidth,text:this.fieldLabel,margin : this.fieldMargin}, {table: {
                    // headerRows : 1,
                    widths: this.returnWidthArray(5),
                    heights : this.returnWidthArray(10),
                    body: this.createTableBody(this.fieldValue),
                  
                  },margin : this.fieldMargin,  layout: {
                      hLineColor : '#D5E3E6',
                      vLineColor : '#D5E3E6'
                  }}]
        
          case 'checkbox':
                return [{width: this.fieldLabelWidth, margin : this.fieldMargin,text:this.fieldLabel},{columns:this.returnCheckBoxArray(this.fieldValue)}]
          default:
                return [{width: this.fieldLabelWidth,text:this.fieldLabel,margin : this.fieldMargin}, {table: {
                    // headerRows : 1,
                    widths: this.returnWidthArray(5),
                    heights : this.returnWidthArray(10),
                    body: this.createTableBody(this.fieldValue),
                  
                  },margin : this.fieldMargin,  layout: {
                      hLineColor : '#D5E3E6',
                      vLineColor : '#D5E3E6'
                  }}]
      }  
      
    }

     createTableBody(str) {
        var returObject = []
        var arr = [];
        arr.length = this.fieldLength;
        arr.fill('',0,arr.length);
        var value = str.toUpperCase().split('');
        
        returObject.push( arr.map(function(current,index) { return {'text':value[index] ? value[index] : '' , 'alignment' : 'center',font:'Baskerville', 'fontSize':8,margin: [0, 1, 0, 0] }}));

        // console.log(returObject);

        return returObject;
        
        }

    returnWidthArray(cellWidth){

        var arr = [];
        arr.length = this.fieldLength;
        arr.fill(cellWidth,0,arr.length);

        return arr;
    }

    returnCheckBoxArray(arr){

        return arr.map((i)=> {
            let icon = i.checked ? {text:  ''  ,style: 'icon'} : {text:   ''    ,style: 'icon'}
            return {text: [icon,{text:'  '},{text:i.text}]}
        })

    }
    
}
    