import React, {Component} from "react";
class TodoItem extends Component{


  constructor(props){
    super(props);
    this.state={done:false}
    this.handleChecked=this.handleChecked.bind(this)
  }
  handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
    }
  render(){
    let txt;
      if (this.state.isChecked) {
          txt = 'done'
      } else {
          txt = 'todo'
      }
    return(
      <h2>{this.props.todo}

              <input type="checkbox" onChange={ this.handleChecked }/>{txt} 
        </h2>

    )
  }
}

export default TodoItem;
