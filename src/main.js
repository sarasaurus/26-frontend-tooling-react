import React from 'react';
import ReactDom from 'react-dom'; 
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() { // this idea/ pattern is common to many OOPs, here render is basically a shell for you to plug your own logic into-- many OOPs have similar shell functions that are basically intended for you to wrap your own funcitonality in, as here
    return (
    <header>
      <h1>Generate Cowsay Lorem: </h1>
    </header>);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);// this basically allows us to initialize the 'this' property, props is react specific, super is required, state is a property of the parent we are extending from, app is a subclass of react -component, if our extended class creates a constructor, we need to call super to give our extension access to the properties of the parent obj-- ie react.component here THIS is referign to the react component--- for any property in our extension we must knit them back to this larger object
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
    const { animal } = this.state;
    this.setState(() => { // set state can recieve a parameter of previous state, it returns a new state property with new state, it does not mutate anything
      return {
        content: cowsay.say({ text: faker.lorem.words(3), f: animal }),
      };
    });
  }// state is only specific to a component
  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{this.state.content}</pre>
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
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
