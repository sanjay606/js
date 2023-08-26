// import logo from './logo.svg';
import './App.css';
import ImageCard2 from './ImageCard2';
import NavbarComp from './NavbarComp';
import './ImageCard2.css';
import datas from './datas';



const nCard=(val)=>{
return (
  <ImageCard2
  key={val.id}
  imgsrc={val.url}
  title={val.title}
  desc={val.desc}
  />
);
}


function App() { 
  return (
    <div className='container'>
    <NavbarComp/>
    <h1 className='text-center'>Card</h1>
      <div className='row'>
           {datas.map((nCard))}
           
      </div>
    </div>
  );
}

export default App;
