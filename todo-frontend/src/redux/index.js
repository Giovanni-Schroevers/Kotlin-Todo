import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  requestAddItem,
  requestTodos,
  requestFinishTodo,
} from '../modules/ui/actions';

class Todos extends Component {
  componentWillMount() {
    this.props.requestTodos();
  }
  
  textChanged = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  addTodo = () => {
    this.props.requestAddItem({
        title: this.state.title,
        description: this.state.description
      });
    this.forceUpdate();
  }

  finishTodo = id => {
    this.props.requestFinishTodo(id);
  }

  render() {
    return (
      <div className="todo">
        <input name="title" onChange={this.textChanged}></input>
        <input name="description" onChange={this.textChanged}></input>
        <button onClick={this.addTodo}>Add todo</button>

        {this.props.itemsError && <div className="todo__error">Error while adding todo</div>}

        {this.props.todos && this.props.todos.data.map((todo, key) => {
          return <div className={"todo__item" + (todo.done && "todo__item--done")} key={key}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            {!todo.done && <button onClick={() => this.finishTodo(todo.id)}>Done</button>}
            <button>Remove</button>
          </div>
        })}
      </div>
    )
  }
}

function mapStateToProps(appState, ownProps){
  return {
    ui: appState.ui,
    items: appState.ui.items,
    todos: appState.ui.todos,
    itemsError: appState.ui.itemsError
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({
      requestAddItem,
      requestTodos,
      requestFinishTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
