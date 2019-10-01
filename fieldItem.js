
module.exports = class FieldItem{

    constructor(fieldLabelWidth,fieldLabel,fieldLength,fieldMargin,fieldValue){

        this.fieldLabel = fieldLabel;
        this.fieldLength = fieldLength;
        this.fieldMargin = fieldMargin;
        this.fieldValue = fieldValue;
        this.fieldLabelWidth = fieldLabelWidth;

      return [{width: this.fieldLabelWidth,text:this.fieldLabel,margin : this.fieldMargin}, {table: {
            headerRows : 1,
            widths: this.returnWidthArray(5),
            heights : 10,
            body: this.createTableBody(this.fieldValue),
            layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 1 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 1 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
          },margin : this.fieldMargin}]

    }

     createTableBody(str) {
        var returObject = []
        var arr = [];
        arr.length = this.fieldLength;
        arr.fill('',0,arr.length);
        var value = str.toUpperCase().split('');
        
        returObject.push( arr.map(function(current,index) { return value[index] ? value[index] : '' }));

        // console.log(returObject);

        return returObject;
        
        }

    returnWidthArray(cellWidth){

        var arr = [];
        arr.length = this.fieldLength;
        arr.fill(cellWidth,0,arr.length);

        return arr;
    }
    
}
    