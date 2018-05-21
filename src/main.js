import React from 'react';
import ReactDom from 'react-dom'; // this is what lets us do real-deal HTML
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';


// ---------------------------------------------------------------------------
// NOTE: every react component needs a render function!!!!!
// ---------------------------------------------------------------------------
class HeaderComponent extends React.Component {
  render() {
    return (<header>
      <h1>Generate Cowsay Lorem: </h1>
    </header>);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'stuff',
      message: 'generate',
    };
    this.generateLorem = this.generateLorem.bind(this);
    this.generateCow = this.generateCow.bind(this);
  }
  generateCow() {
    return cowsay.say({ text: 'poop' });
  }
  generateLorem() {
    this.setState(() => {
      return {
        message: faker.lorem.words(3),
      };
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <h2>Generate Cowsay Lorem:</h2>
        <p>
          {this.state.message}
          </p>
        <button onClick={ this.generateLorem }>Click Me!</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
