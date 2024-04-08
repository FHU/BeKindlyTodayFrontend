import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import PostPage from "./PostPage";
import Home from "./components/Home";
import 'daisyui/dist/full.css'; 

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" Component={Home}/>
                        <Route path="/post" Component={PostPage}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;

render(<App />, document.getElementById('root'));
