import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ContainerApp from '../components/ContainerApp';
import { WelcomeMessage } from '../components/Message';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      todo: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({items: data})
      }, err => err);
  }

  pushToItems = (todo) => {
    this.setState({
      items: [...this.state.items, todo],
      todo: '',
    });
  }

  removeFromItems = (index) => {
    const { items } = this.state;
    items.splice(index, 1)
    this.setState({
      items,
    });
  }

  render() {
    return (
      <ContainerApp>
        <WelcomeMessage />
        <hr />
        <TodoForm pushToItems={this.pushToItems} />
        <hr />
        <TodoList items={this.state.items} removeFromItems={this.removeFromItems} />
      </ContainerApp>
    );
  }
}

export default App;
