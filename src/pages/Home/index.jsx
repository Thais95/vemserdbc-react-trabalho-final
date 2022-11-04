import styles from './Home.module.css';
import posts from 'json/posts.json';
import PostCard from 'components/PostCard';

function Home() {
    return (
        <>
            <h4>Localizações de Breaking Bad na vida real!</h4>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;