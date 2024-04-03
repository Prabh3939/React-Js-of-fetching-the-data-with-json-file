import "./App.css";
import React, {useState,useEffect } from "react";
import datajson from "./data.json";
import Records from "./components/Records";

function App() {



  const [data, setData] = React.useState(datajson);
  const [pageData, setpageData] = React.useState([]);
  
 
  const [page , setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const handleChangePage = (newPage)  =>{
    setPage(newPage);
    
  };
  useEffect(() => {
   
    if(page===0){
      setpageData(data.slice(0,10));

    }
    else{
      setpageData(data.slice(10*page, 10 + 10 * page));
    }
    
    

  },[page])

  const handlePrevious = ()=> {
    if (page  >0){

      handleChangePage(page-1);
    }
  };
  const handleNext = ()=> {
    if (page < Math.ceil(data.length/rowsPerPage)-1 ){
      handleChangePage(page+1);
    }
  };
  

  // useEffect(() => {
  //   setpageData(data.slice(0,10));
  // }, []);

  return (
    <div className="container">
      <h2 style={{alignContent:"center"}}>Data of Employees</h2>
      <div className="App">
        <Records data={pageData} />
        <div className="btn">
        <button onClick={handlePrevious}>PREVIOUS </button>
        </div>
        <div className="spn">
        <span>
          Page {page + 1} of {Math.ceil(data.length / rowsPerPage)}
        </span>
        </div>
        <div  className="btn1">
        <button onClick={handleNext}> Next </button>
        </div>
      </div>
    </div>
  );
}

export default App;
