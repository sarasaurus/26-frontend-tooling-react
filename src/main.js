import React from 'react';
import ReactDom from 'react-dom'; // this is what lets us do real-deal HTML
import faker from 'faker';
import cowsay from 'cowsay-browser';
// import { DRAGON, BONG, GOAT, SHEEP, ELEPHANT } from 'cowsay-browser';
import '../style/main.scss';

console.log('cow', cowsay);
// ---------------------------------------------------------------------------
// NOTE: every react component needs a render function!!!!!
// ---------------------------------------------------------------------------
// const makeCow = cowsay.say({ text: 'ugh', cow:`${__dirname}/node_modules/cowsay-browser/cows/sheep.cow`});
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
      counter: 0, 
    };
    this.generateCow = this.generateCow.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }
  setCounter(e) {
    const { value } = e.target;
    this.setState(() => {
      return {
        counter: value,
      };
    });
  }
  generateCow() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(3), f: 'meow' }),
      };
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <p>{this.state.counter}</p>
        <pre>{this.state.content}</pre>
        <button onClick={ this.generateCow }>Click Me!</button>
        <ul>
          {
            ['meow', 'dragon', 'sheep'].map(content => <li key={ content}> { content }</li>)
          }
        </ul>
        <input type='number' onChange={this.setCounter} value = {this.state.counter}/>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
