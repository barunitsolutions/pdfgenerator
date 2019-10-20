module.exports = class CheckBoxItem{

    constructor(label,fields){

        obj = {},
        obj['columns'] = [{width:150,  
            text: [{text:'Please select title,  ',style:'label'},{text:  ''  ,style: 'icon'},{text:' as applicable',style:'label'}],
      
        }]

        return obj;
    }


}