import React from 'react'

class TodoForm extends React.Component {

    render(){
        return <>
        <form onSubmit={this.props.submit}>
        <input type='text' onChange={this.props.change} name='task' value={this.props.formValue}/>
        <button type='submit'>Add</button>
        </form>
        </>
    }
}

export default TodoForm