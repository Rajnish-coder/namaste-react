
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <div className="header">
        <div className="logo-header">
            <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
        </div>
        <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Cart</li>
           </ul>
        </div>
    </div>
  )
}

const Body = ()=>{
  return (
    <div className='body'>
       <div className='search'>Search Bar</div>
       <div className='res-container'>
          <RestaurantCard />
       </div>
    </div>
  )
}

const RestaurantCard = () =>{
  return (
    <div className='res-card'>
        <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/c627e55c996978a070c10079ae57f706'/>
        <h3>Meghna Foods</h3>
        <h4>Biryani,North Indian,Asian</h4>
        <h4>4.4 stars</h4>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
        <Header />
        <Body />
    </div>
  );
}

export default App;
