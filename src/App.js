
import {
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./MainPage";
import Person_Page from "./PersonPage";
import ListPage from "./ListPage";


  function App (){
    return(
      
      <Routes>
    <Route exact path="/"    element={<MainPage></MainPage>}></Route>
      <Route exact path="/List" element={<ListPage></ListPage>}/>
      <Route exact path="/1"  element={<Person_Page ident={1}></Person_Page>}/>
      <Route  exact path="/2" element={<Person_Page ident={2}></Person_Page>}/>
      <Route  exact path="/3"  element={<Person_Page ident={3}></Person_Page>}/>
      <Route  exact path="/4"  element={<Person_Page ident={4}></Person_Page>}/>
      <Route  exact path="/5"  element={<Person_Page ident={5}></Person_Page>}/>
    </Routes>
    )
  }
  export default App;
