// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [data,setData] = useState([]);
//   useEffect(() =>{
//     fetch('https://data.covid19api.com/summary'
// ).then(
//       res => res.json()
//     ).then(jsondata => setData(jsondata.statewise))
//   },[])
//   return (
//     <div>
//       <center>
//         <h1>INDIA COVID-19 DASHBOARD</h1>
//         <table className="table">
//           <thead className="thead-dark">
//             <tr>
//               <th>State</th>
//               <th>Confirmed</th>
//               <th>Recovered</th>
//               <th>Deaths</th>
//               <th>Active</th>
//               <th>LastUpdate</th>
//             </tr>
//           </thead>

//             <tbody>
//             {data.map((item,index) => {
//                 return (
//                   <tr key={index}>
//                   <td>{item.state}</td>
//                   <td>{item.confirmed}</td>
//                   <td>{item.recovered}</td>
//                   <td>{item.deaths}</td>
//                   <td>{item.active}</td>
//                   <td>{item.lastupdatedtime}</td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//         </table>
//       </center>
//     </div>
//   )
// }

// export default  


import React,{useState} from 'react'
import './App.css'


const App = () => {
  const[city,setCity] = useState("");
  const [result,setResult]   = useState("");  


  const changeHandler = (event) => {
    setCity(event.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
   .then(response =>response.json())
   .then(data => {
    const kelvin =data.main.temp;
    const celcius = kelvin - 273.15;
    setResult(
      `Current temperature in ${city} is ${celcius.toFixed(2)}°C`);
   })
   .catch(error=> console.log(error));
   setCity("");
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>Weather App

            </h1>
            <form onSubmit={submitHandler}>
              <input type="text" name="city" value={city} onChange={changeHandler} /><br/> <br/>

              <input type="submit" value="Get Weather"/>
            </form>         
             </div>
             <h3>{result}</h3>
             
        </div>
      </center>
    </div>
  )
}

export default App