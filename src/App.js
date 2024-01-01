import './App.css';


import Counter from './Componenets/Counter';
function App() {
  

  
  return (
    <div className="App justify-content-center align-items-center d-flex" style={{backgroundColor:'black',height:'100vh'}}>  
        <div className=' p-5 rounded bg-light ' style={{width:"400px"}}>
            <h2>Counter Application</h2>
          <Counter/>
        </div>    
    </div>
  );
}

export default App;