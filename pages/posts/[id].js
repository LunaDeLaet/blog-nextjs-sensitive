export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    }
  })

  return {
    paths,
    fallback: false, // show 404 page when id not exist
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const data = await res.json()

  return {
    props: { post: data },
  }
}

const Details = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Details
