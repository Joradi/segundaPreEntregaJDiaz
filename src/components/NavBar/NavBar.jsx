import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgAgricola = "https://c8.alamy.com/compes/2c7n5gm/granjero-en-sombrero-vintage-logo-granja-concepto-de-comida-natural-2c7n5gm.jpg";
  return (
    <header>
      <Link to="/">
        <img className="imgAgricola" src={imgAgricola} alt="Logo Agricola" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/categoria/2`}>Frutas</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/3`}>Verduras</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar