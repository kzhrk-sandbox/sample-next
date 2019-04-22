import Header from '../components/Header'
import Link from 'next/link'

const Index = () => (
  <div>
    <Header></Header>
    <p>Hello World</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Index