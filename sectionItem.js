const fItem = require('./fieldItem.js')
module.exports = class SectionItem{

    constructor(sectionNumber, sectionTitle,sectionFields){

        this.section = [];
        this.stack = [];
        this.sectionNumber = sectionNumber;
        this.sectionTitle = sectionTitle;
        this.sectionFields = sectionFields;
        
        this.section.push( {width:10 , text: this.sectionNumber, style : 'sectionHeader'} )

        this.stack.push({text : this.sectionTitle,margin : [0,0,0,10],style: 'sectionHeader'})

        this.sectionFields.map(function(crr,Index){
            var obj = {};
             obj['columns'] = new fItem(150,crr['label'],25,[0,0,0,5],crr['value'],crr['fieldType'])
            return obj;
        }).forEach(element => {
            this.stack.push(element)
        });

        // this.stack.concat(this.evalSection)
        // console.log(this.stack)

        this.section.push({width : '*',stack : this.stack,style : 'label'})
        // columns : [
        // {width:10 , text: this.itemNumber, style : 'sectionHeader'} ,
        // {width : '*',
        //  stack :[
        //      {text : this.sectionTitle,margin : [0,0,0,10],style: 'sectionHeader'},
        //      {columns : new fItem(150,'Last Name / Surname',25,[0,0,0,5],'Ganeshan')},
        //      {columns : new fItem(150,'First Name',25,[0,0,0,5],'Bharanidharan')},
        //      {columns : new fItem(150,'Middle Name',25,[0,0,0,5],'')}
        //     // {columns : [{width:50,text:'Last Name',margin : [0,0,0,5]}, {width:'*', text : lastname,margin : [0,0,0,5]}]}
        // ],
   
        // style : 'label'   } ]
        // console.log(this.section)
        return this.section;
    }



}