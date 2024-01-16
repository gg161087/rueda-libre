import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact">
            <div className="formulario">
                <h1>Contáctanos</h1>
                <p>Un asesor se pondrá en contacto con vos para despejar todas tus dudas. </p>
                <form action="#" method="post" id="formulario">
                    <label htmlFor="nombreContactanos">Ingrese su nombre:</label>
                    <input type="text" name="nombre" placeholder="Nombre" required id="nombreContactanos"/>
                    <label htmlFor="telefonoContactanos">Ingrese su teléfono:</label>
                    <input type="text" name="Telefono" placeholder="Telefono" id="telefonoContactanos"/>
                    <label htmlFor="correoContactanos">Ingrese su correo electrónico:</label>
                    <input type="email" name="correo" placeholder="Correo electrónico" id="correoContactanos"/>
                    <label htmlFor="mensajeContactanos">Ingrese su consulta:</label>
                    <textarea name="mensaje" placeholder="Mensaje" required id="mensajeContactanos"></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </section>
    )
}