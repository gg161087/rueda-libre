import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="banner">
                <div className="hero-title">
                    <p>Alquilá hoy tu Bici en Rueda Libre</p>
                    <h1>Animate  a<br></br><span className="h1Naranja">Salir!</span></h1>            
                    <a href="#alquilar" className="BotonPresupuesta">Presupuestá</a>
                </div>
                <div className="hero-img">                
                    <div className="sombra">
                        <img src="/assets/images/hero/ciclistas.png" alt="2 ciclistas circulando"/>
                    </div>
                </div>
            </div>
        </section>
    )
}