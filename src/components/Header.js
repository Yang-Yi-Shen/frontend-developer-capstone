import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <img id="logo" src="/src/components/assets/Logo.svg" />
            <ul id="navbar">
                <li>
                    <a href="#" target="_blank">Home</a>
                </li>
                <li>
                    <a href="#about" target="_blank">About</a>
                </li>
                <li>
                    <a href="" target="_blank">Menu</a>
                </li>
                <li>
                    <a href="" target="_blank">Reservations</a>
                </li>
                <li>
                    <a href="" target="_blank">Order Online</a>
                </li>
                <li>
                    <a href="" target="_blank">Login</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;