import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReportCard from "./components/ReportCard.jsx";
import Student from "./components/student";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path={"/"} element ={<Student/>}/>
         <Route path={"/table"} element ={  <Table/>}/>
        </Routes> 
       <Student />  */}
      <ReportCard />
    </div>
  );
}

export default App;
