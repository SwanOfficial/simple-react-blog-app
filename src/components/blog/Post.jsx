
import Card from '../ui/Card'
import classes from './Post.module.css'
function Post(props) {
  return (
    <Card>
    <li>
    <article className={classes.post}>
        <div className={classes.image}>
            <img src={props.image}/>
        </div>
        <div className={classes.content}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>{props.author}</p>
        </div>

        <div className={classes.actions}>
            <button>Add to Favorite</button>
        </div>
    </article>
    </li>
    </Card>
  )
}

export default Post