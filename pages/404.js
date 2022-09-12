import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  // redirect user
  const router = useRouter()
  useEffect(
    () => {
      setTimeout(() => {
        // router.go(-1) // redirect to previous page
        router.push('/') // redirect to homepage
      }, 5000)
    },
    [] // when empty array: only fire this function once when the component first mounts and not again when any state changes
  )

  return (
    <div className='not-found'>
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Going back to the <Link href='/'>Homepage</Link>
      </p>
    </div>
  )
}

export default NotFound
