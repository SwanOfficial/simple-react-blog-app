import { Link } from 'react-router-dom'
import classes from './Header.module.css'



function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        React Blog App
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/new'>New Post</Link>
        </li>
        <li>
        <Link to='/favorite'>Favorite Post</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header