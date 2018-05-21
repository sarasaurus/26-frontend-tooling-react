import React from 'react';
import ReactDom from 'react-dom'; // this is what lets us do real-deal HTML
import '../style/main.scss';

// ---------------------------------------------------------------------------
// old code from class:
// ---------------------------------------------------------------------------

// // NOTE: every react component needs a render function!!!!!

// class App extends React.Component {
//   render() {
//     console.log('Hello Cruel World from React!');
//     return undefined;
//   }
// }

// const rootNode = document.createElement('div');
// document.body.appendChild(rootNode);

// ReactDom.render(<App/>, rootNode);

// ---------------------------------------------------------------------------

class HeaderComponent extends React.Component {
  render() {
    // this is NOT HTML, its JSX!! REACT transpiles this into an HTML component, only when it determines it is the most optimal time to do so

    return (<header>
      <h1>SUUUUUPPPPP!</h1>
    </header>);
    // this returns how the component will look
    // enter jsx-- virtual vs actual dom
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'yay, aren\'t computers cool?!',
      secretState: 'you will never see me! not everything in the state must be shown',
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }
  handleCounterIncrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter + 1,
      };
    });
  }

  handleCounterDecrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter - 1,
      };
    });
  }
  setCounter(e) {
    const { value } = e.target;
    this.setState(() => {
      return {
        counter: value,
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <h2>H2 right here </h2>
        <p>This is a random number! { Math.random()}</p>
        <p> Here is a message: {this.state.message}</p>
        <ul>
          {
            ['A list!', 'Another Item', 'Again!', 'moar'].map(content => <li key={content}> { content } </li>)
          }
        </ul>
        <p>the value of my counter is: {this.state.counter}</p>
        <button onClick={ this.handleCounterIncrement }>Increment Counter!</button>
        <button onClick={ this.handleCounterDecrement }>Decrement Counter!</button>
        <input type='number' onChange={this.setCounter}value = {this.state.counter}/>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
