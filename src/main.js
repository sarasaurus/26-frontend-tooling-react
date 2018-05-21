import React from 'react';
import ReactDom from 'react-dom'; // this is what lets us do real-deal HTML
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';


// ---------------------------------------------------------------------------
// NOTE: every react component needs a render function!!!!!
// ---------------------------------------------------------------------------
const makeCow = cowsay.say({ text: 'ugh' });
class HeaderComponent extends React.Component {
  render() {
    return (
    <header>
      <h1>Generate Cowsay Lorem: </h1>
    </header>);
  }
}
// class CowComponent extends React.Component {
//   render() {
//     return (
//       <pre>{ generateCow }</pre>);
//   }
// }
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: 'click to change' }),
      message: 'stuff',
    };
    this.generateCow = this.generateCow.bind(this);
  }
 
  generateCow() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(3) }),
      };
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{this.state.content}</pre>
        <button onClick={ this.generateCow }>Click Me!</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
