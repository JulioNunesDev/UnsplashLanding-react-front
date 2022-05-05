import logo from './assets/logo.svg'
import './App.css'
import {FiSearch} from 'react-icons/fi'
import {MdDoubleArrow} from 'react-icons/md'
import a from './assets/a.svg'
import b from './assets/b.svg'
import c from './assets/c.svg'
import d from './assets/d.svg'
import e from './assets/e.svg'
function App() {


  return (
    <div className="App">
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Advertise</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <div className="btn">
        <button>Login / Sign Up</button>
      </div>
    </header>


    <div className="content">
      <div className="leftContent">
        <h2>Unsplash</h2>
        <p>The internets source of freely-usable images.
            Powered by creators everywhere.</p>

          <div className="input--box">
            <FiSearch style={{fontSize:25
            , position: 'absolute', marginLeft: 10, color: '#ccc'
            }}/>
            <input type="text" placeholder='Search Free High-resolution photos' />
          </div>
      </div>

      <div className="rightContent">
        <img className='box1' src={a} alt="" />
        <img className='box2' src={b} alt="" />
        <img className='box3' src={c} alt="" />
        <img className='box4' src={d} alt="" />
        <img className='box5' src={e} alt="" />
      </div>
    </div>
      <div className='explore'>
        <p>Explore All <MdDoubleArrow/></p>
      </div>

    </div>
  )
}

export default App
