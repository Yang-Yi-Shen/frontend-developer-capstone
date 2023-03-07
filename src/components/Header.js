import { Link } from 'react-router-dom'

function Header() {
  return(
      <header>
            <img id="logo" src="/src/components/assets/Logo.svg" alt="" />
            <ul id="navbar">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href="/" target="_blank">About</a>
                </li>
                <li>
                    <a href="/" target="_blank">Menu</a>
                </li>
                <li>
                    <Link to='/booking'>Reservations</Link>
                </li>
                <li>
                    <a href="/" target="_blank">Order Online</a>
                </li>
                <li>
                    <a href="/" target="_blank">Login</a>
                </li>
            </ul>
      </header>
  )
}

export default Header;