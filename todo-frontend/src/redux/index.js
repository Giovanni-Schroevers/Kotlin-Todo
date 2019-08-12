import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  requestAddItem,
  requestTodos,
  requestFinishTodo,
  requestRemoveTodo,
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
      window.location.reload()
  }

  finishTodo = id => {
    this.props.requestFinishTodo(id);
    window.location.reload()
  }

  removeTodo = id => {
    this.props.requestRemoveTodo(id);
    window.location.reload()
  }

  render() {
    return (
      <div className="todo">
        <div className="todo__form">
          <input className="form__input" name="title" onChange={this.textChanged}></input>
          <input className="form__input" name="description" onChange={this.textChanged}></input>
          <button className="form__button" onClick={this.addTodo}>Add todo</button>
        </div>

        {this.props.itemsError && <div className="todo__error">Error while adding todo</div>}

        {this.props.todos && this.props.todos.data.map((todo, key) => {
          return <div className={"todo__item " + (todo.done ? "todo__item--done" : "")} key={key}>
            <h3 className="item__title">{todo.title}</h3>
            <p className="item__description">{todo.description}</p>
            <div className="item__buttons">
              {!todo.done && <button className="item__button" onClick={() => this.finishTodo(todo.id)}>Done</button>}
              <button className="item__button" onClick={() => this.removeTodo(todo.id)}>Remove</button>
            </div>
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
      requestFinishTodo,
      requestRemoveTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
