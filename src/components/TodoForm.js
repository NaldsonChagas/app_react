import React from 'react'

export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };
  }

  onAdd = (event) => {
    event.preventDefault();
    const todo = this.state.todo;
    if (todo) this.props.pushToItems(todo);
    else console.log('Adicione um todo');
    this.setState({
      todo: '',
    });
  }

  onChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" name="todo" placeholder="Insert your todo here"
            onChange={this.onChange} value={this.state.todo} className="form-control" />
        </div>
        <div className="form-group">
          <button type="button" onClick={this.onAdd} className="btn btn-success">Insert</button>
        </div>
      </div>
    );
  }
}