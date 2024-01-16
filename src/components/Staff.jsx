import './Staff.css';

export const Staff = ({staffs}) => {
    return (
        <section id="staff">
            <h2>Personal</h2>
            <div id="empleados">
                {staffs.map((staff) => (
                    <div className="card" key={staff.id}>
                        <img className="imgCard" src={staff.image} alt={`Imagen de perfil de ${staff.name}`}/>
                        <span className="name">{staff.name}</span>
                        <span className="job">{staff.position}</span>
                        <p className="description">{staff.description}</p>
                    </div> 
                ))}            
            </div>
        </section>
    )
}