import './styles/Navbar.css'
import Logo from '../assets/react.svg'




export default function Navbar() {
    return (
        <nav>
            <img src={Logo}></img>
            <h3 className="logo--text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}