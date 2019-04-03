const domContainer = document.getElementById('root');
const element = React.createElement("h1", {
  className: "title"
}, "Hello World!");

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Dmytro'
    };
  }

  render() {
    return [element, React.createElement("p", null, "Hello from ", this.state.author, "!")];
  }

}

ReactDOM.render(React.createElement(PageContent), domContainer);