import DoctorsTable  from "./DoctorsTable";
import { useState } from "react";
import "./App.css";
function App() {

//   const mystyle={
//     backgroundImage:'url(snehal.jpg)',
//     backgroundSize:'cover',
//     height:'1vh'
//   }
//   function DisplayImage({FileName}){
//   return (
//     <div >
//       <img src={FileName} height='400px' />
//     </div>
//   )
// }

// return(
//   <div>
//     <h1> Momos</h1>
//     <DisplayImage FileName='momos.jpg'/> <br/> <br/> <br/> <br/>

//     <h1> Pizza</h1>
//     <DisplayImage FileName='pizza.jpg'/> <br/> <br/> <br/> <br/>

//     <h1> Burger</h1>
//     <DisplayImage FileName='burger.jpeg'/> <br/> <br/> <br/> <br/>
//    </div>
// )

// const [userName, setUserName] =useState();
// const mystyle={
//   backgroundImage:'url(beach.jpg)',
//   backgroundSize:'cover',
//   height:'100vh'
// }

// function displayName(){
//   alert("Entered name is :" +userName)
// }

// return(
//   <div style={mystyle}>
//     <input type='text' onChange={(e)=> setUserName(e.target.value)}/> &nbsp;
//     <button onClick={displayName}>Click here</button>
//   </div>
// )




  const [userName, setUserName] = useState();
  //Provide the background image details..
  const myStyle = {
    backgroundImage: 'url(hospital.jpg)',
    backgroundSize: 'cover',
    height: '200vh'
  }
  return (
    <div style={myStyle}>
      <h1> Doctors List...</h1> &nbsp;
<DoctorsTable/>
    </ div>
  );
}

export default App;
