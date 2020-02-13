import React,{Component} from "react";
import TodoItem from "./TodoItem"
class Field extends Component{
  constructor(props){
    super(props);
    this.state={item:"",isChecked:false, id:1}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }
  handleChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value,
      id:this.props.id,

    })
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.props.value(this.state);
    this.setState({item:""})
  }

  render(){
    return(

      <div>
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        value={this.state.item}
        onChange={this.handleChange}
        name="item"
       />
      
       <button disabled={this.state.item===""}>+Add</button>
      </form>

      </div>
    )
  }
}

export default Field;
