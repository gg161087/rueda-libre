import './Header.css';

export const Header = () => {
    return (
        <header>
            <img src="./assets/images/logos/logo_final.png" alt="logo1" />
            <nav>
                <ul>                    
                    <li>
                        <a href="#alquilar">Alquilá tu Bici</a>
                    </li>
                    <li>
                        <a href="#personal">Personal</a>
                    </li>
                    <li>
                        <a href="#contáctanos">Contáctanos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}