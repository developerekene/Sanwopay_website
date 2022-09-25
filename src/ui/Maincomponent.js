import React from 'react'
import NavBar from './components/NavBar'
import About from './screens/About';
import BlogPage from './screens/Blog';
import { Home } from './screens/Home'

const Maincomponent = () => {
  let component;
  switch (window.location.pathname) {
    case "/": component = <Home />;
    break
    case "/about": component = <About />;
    break
    case "/blog": component = <BlogPage />;
    break
  }
  return (
    <>
    <NavBar />
    {component}
    </>
    
  )
}

export default Maincomponent