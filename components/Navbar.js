import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='/logo.png'
          alt='Sensitive'
          width={250}
          height={77}
        />
      </div>
      <Link href={'/'}>Home</Link>
      <Link href={'/posts/'}>Posts</Link>
      <Link href={'/about'}>About</Link>
    </nav>
  )
}

export default Navbar
