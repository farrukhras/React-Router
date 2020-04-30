import React from 'react'
import './App.css'
import About from "/home/farrukh/Desktop/React/routing-app/src/Components/About"
import Shop from "/home/farrukh/Desktop/React/routing-app/src/Components/Shop"
import Nav from "/home/farrukh/Desktop/React/routing-app/src/Components/Nav"
import ItemDetail from "/home/farrukh/Desktop/React/routing-app/src/Components/ItemDetail"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

/* 
The BrowserRouter(Router) is something we want when we need a component to be routed to a browser.
It mean that all the components that should have a routing ability, they should come within the 
<Router></Router> tags.

The Switch basically means that we do not want the React router to render another component when we
actually want some other component. E.g. if home page has url of "/" and about page has url of "/about",
and we place them in the order shown below. If we go to "localhost:3000/" then the homepage is rendered
and if we go to "localhost:3000/about" then again the homepage is rendered. So to tackle this issue, we 
use the Switch. It will stop the process of going to each component and matching the component url to the
requried url. Rather it will only check and render the compoenent, whose entire or part of the url,
matches the input url. WHen it finds the first match, it stops the process. To prevent rendering homepage 
when we input "/about" we can add exact with the "/" url so that it only renders when the input url us "/".

Route essentially takes a path(the url) and a prop(component) which tells which component to render 
for this url.
*/

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  )
}

// Test Component
const Home = () => {
  return (
    <h1>Home</h1>
  )
}
