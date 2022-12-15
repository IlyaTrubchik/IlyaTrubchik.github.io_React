
import {
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./MainPage";
import PersonPage from "./PersonPage";
import ListPage from "./ListPage";


  function App (){
    return(
      
      <Routes>
    <Route exact path="/"    element={<MainPage/>}></Route>
      <Route exact path="/List" element={<ListPage/>}></Route>
      <Route exact path="/:id"  element={<PersonPage/>}></Route>
    </Routes>
    )
  }
  export default App;
