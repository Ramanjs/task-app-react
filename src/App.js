import { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ""
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} id="task-form">
          <input type="text" value={this.state.task} onChange={this.handleChange} required/>
          <input type="submit"/>
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
  
}

export default App;
