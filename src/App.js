
import { NavLink as Link, NavLink } from "react-router-dom"
import MainPage from "./components/MainPage";
import ListPage from "./components/ListPage";
import Person_Page from "./components/PersonPage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



  function App (){
    return(
        <Router>
        <Routes>
      <Route path="/"   element={<MainPage></MainPage>}/>
      <Route path="/List" element={<ListPage></ListPage>}/>
      <Route path="/1"  element={<Person_Page ident={1}></Person_Page>}/>
      <Route path="/2"  element={<Person_Page ident={2}></Person_Page>}/>
      <Route path="/3"  element={<Person_Page ident={3}></Person_Page>}/>
      <Route path="/4"  element={<Person_Page ident={4}></Person_Page>}/>
      <Route path="/5"  element={<Person_Page ident={5}></Person_Page>}/>
      </Routes>
      </Router>
    )
  }
  export default App;
