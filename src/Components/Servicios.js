
const Servicios = () => {
    return (
        <main className="servicios-main wrapper">
            <h3>MedinaMarcas se encarga de asesorarte en todas las areas</h3>
            <div className="servicios-container">
                <div className="servicios-card" id="servicios-1">
                    <h2>Llevando tus ideas a la realidad</h2>
                    <div className="servicios-text wrapper">
                        <p className="servicios-p">Registro de marcas</p>
                        <p className="servicios-p">Registro de patentes</p>
                        <p className="servicios-p">Transferencias</p>
                    </div>
                </div>
                <div className="servicios-card" id="servicios-2">
                    <h2>Construyendo puentes con tu propiedad intelectual</h2>
                    <div className="servicios-text wrapper">
                        <p className="servicios-p">Licencias</p>
                        <p className="servicios-p">Convenios de Cesión</p>
                        <p className="servicios-p">Reinvindicaciones</p>
                    </div>
                </div>
                <div className="servicios-card" id="servicios-3">
                    <h2 className="servicios-h2">Defendiendo tus derechos</h2>
                    <div className="servicios-text wrapper">
                        <p className="servicios-p">Defensas y vigilancias</p>
                        <p className="servicios-p">Recursos administrativos y Acciones</p>
                        <p className="servicios-p">Procesos extrajudiciales, mediación, judiciales, ejecutivos</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Servicios;