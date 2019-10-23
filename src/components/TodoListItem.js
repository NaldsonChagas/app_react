import React from 'react'

export default class TodoListItem extends React.Component {

  onRemove = () => {
    this.props.removeFromItems(this.props.index);
  }

  render() {
    const { item } = this.props;
    return (
      <li className="list-group-item">{item} -&nbsp;
        <button type="button" className="btn btn-danger"
          onClick={this.onRemove}>X</button></li>
    );
  }
}