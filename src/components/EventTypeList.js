import React from 'react'
import { DropdownList } from 'react-widgets';



function handleChange(e) {
    mycategory = e;
    console.log(mycategory);
    }

function createitemlist(categories){
    let itemelements = [];
    itemelements.push(<option key={0} value={'View All'}></option>);
    categories.categories.map(category => (itemelements.push(
        <option key={category.index+1} value={category.activityTypeName}></option>  
      )))
      var itemprops = itemelements.map(function(item) {
        return item['props'];
        });
        var items = itemprops.map(function(item){return item['value']});        
//    console.log(items);
    return items;
}  

const EventtypeList = ({categories}) => 
( 
    <DropdownList
        defaultValue = 'View All'
        mycategory = 'View All'
        data={createitemlist(categories)}
        onChange={value => {
            handleChange(value);
                }
          }
        /> 
)

export var mycategory;
export default EventtypeList;
