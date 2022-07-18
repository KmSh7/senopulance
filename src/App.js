import './App.css';
import titleImage from './components/pictures/senopulance.png';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'

function App() {
  const fontfamily ={
    fontFamily:'Darker Grotesque',
    fontWeight:'800',
    color:'#555454'
  };
  return (
    <div style={fontfamily} className="app-flex-container">
      <div className='app-flex-item offer-bar'>BIG <span style={{fontSize:'30px',fontWeight:'500'}}>SALE</span> ENERGY - up to <span style={{fontSize:'30px',fontWeight:'500'}}>70%</span> DISCOUNT</div>
      <div className='app-flex-item title'><img src={titleImage} alt="senOpulance" className='titleImage'></img></div>
      <div className='app-flex-item routing'>
        <Router>
          <nav>
            <Link to='/Categories' className='app-nav-onlyforhome'>Home</Link>
            <Link to='/About' className='app-nav'>About</Link>
            <Link to='/Help' className='app-nav'>Help</Link>
          </nav>
          <main>

          <Routes>
            <Route path='/Categories' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Help' element={<Help/>}></Route>
          </Routes>
          </main>
        </Router>
      </div>
      <footer className='app-flex-item footer'>
        <a href="https://www.instagram.com/senopulence/" target="_blank"><div className='icon instagram'></div></a>
        <a href="https://www.facebook.com/profile.php?id=100083640364268" target="_blank"><div className='icon facebook'></div></a>
        <a href="https://www.pinterest.com/senopulence/"  target="_blank"><div className='icon printerest'></div></a>
      </footer>
    </div>
  );
}

export default App;
