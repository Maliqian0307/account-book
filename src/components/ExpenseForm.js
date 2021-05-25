import React from 'react';
import { DatePicker} from 'antd';
import 'antd/dist/antd.css';

//需要改成能sort的form
class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            category:props.expense? props.expense.category : 'Daily goods',
            description:props.expense ? props.expense.description : '',
            amount:props.expense ? props.expense.amount : '',
            createdAt:props.expense ? props.expense.createdAt :undefined,
            error:''
        }
    }

onDateChange = (data,dateString) =>{
    this.setState(()=>({createdAt:dateString}));
    // console.log(dateString);
}

onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }));
      }
    };

onDescriptionChange = (e) =>{
    const description = e.target.value;
    this.setState(()=>({description}))
}

onCategoryChange = (e) =>{
    const category =e.target.value;
    this.setState(()=>({category}))
}

onSubmit=(e)=>{
    e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'please provide description and amount'}))
        } else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
            category:this.state.category,
            description:this.state.description,
            createdAt:this.state.createdAt,
            amount:this.state.amount,
        });
        // console.log('submitted')
    }}


  render(){
  return (
    <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <label>
                <select value={this.state.category} onChange={this.onCategoryChange}>
                    <option value="Daily goods"> Daily goods </option>
                    <option value="Rent"> Rent </option>
                    <option value="Utility"> Utility </option>
                    <option value="Food"> Food </option>
                    <option value="Transport"> Transport </option>
                    <option value="Social"> Social </option>
                    <option value="Travel"> Travel </option>
                    <option value="Other"> Social </option>
                </select>
            </label>
             
            <input
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
            />
            <input
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
            />
            <DatePicker onChange={this.onDateChange} />
            <button> Submit </button>
        </form>
    </div>

    
    )
}
}

export default ExpenseForm;