import './navBar.css';

export const NavBar = () => {
  return (
    <>
        <div className='navbar__container'>
            <nav className='navbar__menu'>
                <ul className='navbar__list'>
                    <li className='aboutMe line'>Mi Perfil</li>
                    <li className='skills line'>Mis Habilidades</li>
                    <li className='proyects line'>Proyectos</li>
                </ul>
            </nav>
        </div>
    </>
  )
}
