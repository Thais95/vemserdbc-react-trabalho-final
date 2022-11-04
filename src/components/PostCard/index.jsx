import styles from './PostCard.module.css';

function PostCard({ post }) {
    return(
        <>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/img.jpg`}
                    alt='Imagem do Post'
                 />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <p className={styles.texto}>{post.texto}</p>
            </div>
        </>
    )
}

export default PostCard;