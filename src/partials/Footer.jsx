import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="column column-logo">
                    <img src="/assets/images/logos/logo_foot.png" alt="logo" />
                </div>
                <div className="column column-contacto">
                    <h3>Contacto</h3>
                    <p><strong>Dirección:</strong>Castro Barros 1536/Córdoba.ARG</p>
                    <p><strong>Teléfono:</strong>0351-156703437</p>
                    <p><strong>email:</strong>contacto@ruedalibre.com</p>
                </div>
                <div className="column column-legales">
                    <h3>Legales</h3>
                    <ul>
                        <li><a href="https://www.wonder.legal/cl/modele/terminos-condiciones-generales#:~:text=El%20documento%20denominado%20T%C3%A9rminos%20y%20Condiciones%20Generales%20de,ella%2C%20y%20con%20las%20personas%20responsables%20del%20sitio." target="_blank">Copyright Notice</a></li>
                        <li><a href="https://www.wonder.legal/cl/modele/terminos-condiciones-generales#:~:text=El%20documento%20denominado%20T%C3%A9rminos%20y%20Condiciones%20Generales%20de,ella%2C%20y%20con%20las%20personas%20responsables%20del%20sitio." target="_blank">Política de Privacidad</a></li>
                        <li><a href="https://www.wonder.legal/cl/modele/terminos-condiciones-generales#:~:text=El%20documento%20denominado%20T%C3%A9rminos%20y%20Condiciones%20Generales%20de,ella%2C%20y%20con%20las%20personas%20responsables%20del%20sitio." target="_blank">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div className="column column-rrss">
                    <h3>Redes Sociales</h3>
                    <div className="rrss">
                        <div className="sociales">
                            <a href="https://www.facebook.com/" target="_blank"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}