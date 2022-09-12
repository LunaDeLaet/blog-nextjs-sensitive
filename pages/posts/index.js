import Link from 'next/link'
import styles from '../../styles/Posts.module.css'

// fetch data from external api
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: { posts: data },
  }
}

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <a
          className={styles.single}
          href={'/posts/test'}>
          <h3>Test</h3>
        </a>
      </div>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={'/posts/' + post.id}>
          <a className={styles.single}>
            <h3>{post.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Posts
