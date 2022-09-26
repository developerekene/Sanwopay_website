import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import About from './screens/About';
import Articles from './screens/Articles';
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
    case "/articles": component = <Articles />;
    break
  }
  return (
    <>
    <NavBar />
    {component}
    <Footer />
    </>
    
  )
}

export default Maincomponent