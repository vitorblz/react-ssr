import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import TodoApp from './TodoApp';



function About() {
  return <h2>About</h2>;
}

const  Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <Link to="/">Back</Link>
    </div>
  );
  
}

const todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

const Index = () => {
  
  return (
    <>
      <h2>Home</h2>
      <TodoApp initItems={todoItems} />
    </>
  );
}


const App = (props) =>{

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Teste</title>
      </head>
      <body>
        {props.name}

        <div>
  
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about/">About</NavLink>
            </li>
            <li>
              <NavLink to="/users/">Users</NavLink>
            </li>
          </ul>
     
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </Switch>
        </div>

      </body>
    </html>
  );
} 

export default App;