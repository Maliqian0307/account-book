import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByAmount, sortByDate, setTextFilter, setTypeFilter, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



export class ExpenseListFilters extends React.Component{
    // console.log(props);
    
    state = {
        calendarFocused: null
      };
    onDatesChange = ({ startDate, endDate }) => {
        console.log(startDate)
        console.log(endDate)
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
      };
    onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    };
    onTypeChange = (e) => {
        this.props.setTypeFilter(e.target.value);
    }
    onSortChange = (e) => {
    if (e.target.value === 'date') {
        this.props.sortByDate();
    } else if (e.target.value === 'amount') {
        this.props.sortByAmount();
    }
    };
    

    render() {
        return (
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <select
                    className="select"
                    value = {this.props.filters.expenseType}
                    onChange = {this.onTypeChange}>
                    <option value="Daily goods"> Daily goods </option>
                    <option value="Rent"> Rent </option>
                    <option value="Utility"> Utility </option>
                    <option value="Food"> Food </option>
                    <option value="Transport"> Transport </option>
                    <option value="Social"> Social </option>
                    <option value="Travel"> Travel </option>
                    <option value="Other"> Social </option>          
                    </select> 
                </div>
                <div className="input-group__item">
                    <input 
                    type='text'
                    placeholder="Search Expenses"
                    className="text-input"
                    value={this.props.filters.text} 
                    onChange = {this.onTextChange}
                    />
                </div>
                <div className="input-group__item">
                    <select
                    className="select"
                    value = {this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value = 'date'>Date</option>
                    <option value = 'amount'>Amount</option>
                    </select> 
                </div>
    
                <div className="input-group__item">
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId="startDate"
                    endDateId="endDate"
                    
                    />
                </div>
            </div>    
        </div>)
    }
    
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        filters:state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setTypeFilter:()=>dispatch(setTypeFilter()),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  });

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);


// expenseType:'',
// text:'',
// sortBy:'date',