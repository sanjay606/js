
import './App.css';
import ImageCard2 from './ImageCard2';
import NavbarComp from './NavbarComp';
import './ImageCard2.css';
// import datas from './datas';
import { useEffect } from 'react';
import { useState } from 'react';
import ChildComponent from './ChildComponent';

// const nCard=(val)=>{
//   return (
//     <ImageCard2
//     key={val.id}
//     imgsrc={val.image}
//     title={val.title}
//     desc={val.price}
//     />
//   );
//   }


function App(){
  // const [data,SetData] = useState([]);
  // useEffect(() =>{
  //   const fetchData = async () =>{
  //     try{
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const data = await response.json();
  //       SetData(data);
  //     }
      
  //       catch(error)
  //       {
  //         console.log('Error Occured',error);
  //       }
        
        
  //     };
  //     fetchData();
  //   },[]);

  const [DataFromChild,SetDataFromChild] = useState(null);
  const HandleChild=(children)=>{
    SetDataFromChild(children);
  }
  return (
    // <div className='container'>
    // <NavbarComp/>
    // <h1 className='text-center'>Card</h1>
    //   <div className='row'>
    //        {data.map((nCard))}
    //   </div>
    // </div>
    <>
      
    <ChildComponent 
      OnDataFromChild={HandleChild}
      />
      {DataFromChild && <p> {DataFromChild} </p>}

    </>
  );
}

export default App;
