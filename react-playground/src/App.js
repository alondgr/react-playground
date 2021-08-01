
import './App.css';
import Initials from './Initials';
import DayOfWeek from './DayOfWeek';
import Article from './Article/Article';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import Counter from './Counter/Counter';
import StudentPicker from './StudentPicker';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';


function App() {

  function clickHandler() {
    console.log('you clicked me!');
  }




  return (
    <div>
      {/* <StudentPicker /> */}
      <RandomColorSquare></RandomColorSquare>
      {/* <button onClick={clickHandler}>CLICK ME!</button> */}
      {/* <Counter /> */}
      <Menu>
        <MenuItem>
          <a href="/" className='home'>
            <img /> Homepage
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/shop" className='shop'>
            <img /> Shop
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/gallery" className='gallery'>
            <img /> Gallery
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/contact" className='contact'>
            <img /> Contact
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
