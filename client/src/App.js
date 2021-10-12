import axios from 'axios';
import { useEffect, useState } from 'react';
import BuildResume from './components/BuildResume';

function App() {

  const [data, setdata] = useState(null)
  
  useEffect(()=>{
    axios.get('api')
    .then(res=>setdata(res.data.message))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      <h4>{!data ? 'Loading...' : data}</h4>
      <BuildResume  />
    </div>
  );
}

export default App;
