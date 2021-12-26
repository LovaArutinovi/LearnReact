import s from './Post.module.css'

const Post = (props) => {
   return (
      <div className={s.post}>
         <div className={s.post__content}>
             <div className={s.post__contentImg}>
                 <img src="https://deadline.com/wp-content/uploads/2020/09/Gugu-Mbatha-Raw-e1610021013129.jpg" />
             </div>
            <p>{props.message}</p>
         </div>
         <div className={s.post__reaction}>
            <button><img src="https://cdn-icons-png.flaticon.com/512/633/633991.png" alt=""/>
         </button>
         <p>likes {props.likesCount}</p>
      </div> 
      </div >
   )
}

export default Post;