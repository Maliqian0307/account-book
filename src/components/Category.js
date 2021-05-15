import React from 'react';
import { Select } from 'antd';


const Category = ()=> {
    const { Option } = Select;

    const onChange =(value)=> {
      console.log(`selected ${value}`);
    }
    
    const onBlur =()=> {
      console.log('blur');
    }
    
    const onFocus =() => {
      console.log('focus');
    }
    
    const onSearch =(val) =>{
      console.log('search:', val);
    }
    
    return(
    <div>
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a category"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>,
      mountNode,
    );
    </div>
    )}
        


 
export default Category;