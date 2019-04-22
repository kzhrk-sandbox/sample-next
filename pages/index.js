import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello World</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Index