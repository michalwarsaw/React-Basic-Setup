import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';

class App extends React.Component {
    render() {
        return <div>Hello React!</div> 
    }
}
ReactDOM.render(<App />, 
document.getElementById('app')
);