import React from 'react'

class TodoForm extends React.Component {

    render(){
        return <>
        <form onSubmit={this.props.submit}>
        <input type='text' onChange={this.props.change} name='task' value={this.props.formValue}/>
        <button type='submit'>Add</button>
        </form>
        <button style={{marginTop:'50px'}} onClick={e => {this.props.clear(e)}}>Clear Completed</button>
        </>
    }
}

export default TodoForm