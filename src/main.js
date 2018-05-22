import React from 'react';
import ReactDom from 'react-dom'; 
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    return (
    <header>
      <h1>Generate Cowsay Lorem: </h1>
    </header>);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: 'click to change' }),
      animal: '', 
    };
    this.generateCow = this.generateCow.bind(this);
    this.setType = this.setType.bind(this);
  }

  setType(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(3), f: value }),
        animal: value,
      };
    });
  }
  generateCow() {
    const animal = this.state.animal;
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(3), f: animal }),
      };
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{this.state.content}</pre>
        <div>
        <label>Change the message: </label>
        <button onClick={ this.generateCow }>Click Me!</button>
        <form onSubmit={this.setType}>
        <label>
          Change the cow:
          </label>
        <select value = {this.state.value} onChange={this.setType}>
          {
            ['meow', 'dragon', 'sheep', 'cheese', 'bunny', 'dragon-and-cow', 'chicken-and-egg', 'elephant', 'hellokitty', 'flaming-sheep', 'eyes', 'bud-frogs', 'mech-and-cow', 'moose', 'rooster', 'milk', 'moofasa', 'small', 'turkey', 'vader-koala', 'tux', 'chick', 'stegosaurus', 'squirrel'].map(content => <option key = { content }> { content }</option>)
          }
        </select>
        </form>
        </div>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
