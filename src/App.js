import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Switch } from 'react-router-dom';
import Button from './components/button';
import Product from './components/product';
import About from './components/about';
import Login from './components/loginForm';
import NavBar from './components/navBar';
import Sign from './components/signIn';
import Contact from './components/contact';

function App() {
  return (
    <div>
<NavBar />
    
    <div>
    <Switch>
      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/sign" component={Sign} />
      <Route path="/contact" component={Contact}/>
      <Route path="/" component={Home} />



    </Switch>
      
    </div>
    </div>

  );
}

export default App;
