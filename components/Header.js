import Link from 'next/link'

const headerStyle = {
  backgroundColor: '#ccc'
}

const Header = () => (
  <div style={headerStyle}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Header