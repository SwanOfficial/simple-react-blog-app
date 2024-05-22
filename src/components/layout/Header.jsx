import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import { useContext } from 'react'
import { FavoriteContext } from '../../store/favoriteContex'


function Header() {

  //Subcribe Global context
  const favoriteContext = useContext(FavoriteContext)

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
        <span className={classes.badge}>{favoriteContext.totalFavorite}</span>
        </li>
      </ul>
    </header>
  )
}

export default Header