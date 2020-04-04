import React, { Component, createContext } from "react";
// To start  Context
// Step: 1 => Create Context
const MyContext = createContext();

// Step: 2 => Create Provider Component
// This is the place where data lives.
class MyProvider extends Component {
  state = {
    name: "Mohsin Azam",
    age: 28,
    cool: true,
  };
  render() {
    //const { value } = this.state;
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incrementAge: () => this.setState({
            age: this.state.age + 1
          })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

class Family extends Component {
  render() {
    return (
      <div>
        <Person />
      </div>
    );
  }
}
class Person extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <>
            <p>I am Person App Component. Name : {context.state.name}</p>
            <p>I am Person App Component. Age: {context.state.age}</p>

            <button onClick={context.incrementAge}>+(update the context)</button>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default App;
