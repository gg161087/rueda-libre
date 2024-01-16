import './FormRent.css';

export const FormRent = () => {
    return (
        <div className="form-rent">
                <form id="form-wizard">                    
                    <div className="form-step">
                        <h2> Alquilá tu bici.</h2>
                        <p>Completando la siguiente información nos ayudará a seleccionar la mejor bici para tu experiencia.</p>
                        <label htmlFor="bicicleta">Bicicleta:</label>
                        <select id="bicicleta" name="bicicleta" required>
                            <option value="">- Seleccioná una bici -</option>
                            <option value="montaña">Bicicletas de montaña</option>
                            <option value="urbana">Bicicletas urbanas</option>
                            <option value="hibrida">Bicicletas eléctricas</option>
                            <option value="chicos">Bicicletas infantiles</option>
                        </select>
                        <br></br>
                        <label htmlFor="rodado">Rodado:</label>
                        <select id="rodado" name="rodado" required>
                            <option value="">- Seleccioná un rodado -</option>
                            <option value="26">infantiles</option>
                            <option value="26">16"</option>
                            <option value="26">20"</option>
                            <option value="26">24"</option>
                            <option value="26">26"</option>
                            <option value="27">27,5"</option>
                            <option value="28">29"</option>
                        </select>
                        <br></br>
                        <label htmlFor="edad">Edad:</label>
                        <select id="edad" name="edad" required>
                            <option value=""> - Seleccioná tu rango de edad -</option>
                            <option value="nino">1-5 años (82/100cm)</option>
                            <option value="adolescente">4-6 años (105/120cm)</option>
                            <option value="adulto">6-8 años (115/130cm)</option>
                            <option value="mayor">7-11 años (125/145cm)</option>
                            <option value="mayor">10-14 años (140/165cm)</option>
                            <option value="mayor">18+ años (165/185cm +)</option>
                        </select>
                        <br></br>
                        <label htmlFor="precio" id="valor">Valor por día:</label>
                        <span id="precio"></span>
                    </div>                     
                    <div className="form-step">
                        <h2>Datos del Cliente</h2>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required/>
                        <br></br>
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required/>
                        <br></br>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                        <br></br>
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" required/>
                    </div>        
                    <div className="form-step">
                        <h2>Información adicional</h2>
                        <label htmlFor="informacion">Información adicional:</label>
                        <textarea id="informacion" name="informacion"></textarea>
                        <span>Agregue aquí información adicional acerca de su pedido.</span>
                    </div>           
                    <div className="form-buttons">
                        <button type="button" className="prev-button">Atrás</button>
                        <button type="button" className="next-button">Siguiente</button>
                        <button type="submit" className="submit-button">Finalizar</button>
                    </div>
                </form> 
            </div>       
    )
}