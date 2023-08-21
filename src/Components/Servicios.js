
const Servicios = () => {
    return (
        <main className="servicios-main">
            <div className="servicios-top-container">
                <div className="servicios-top wrapper">
                    <h1 className="h1">MedinaMarcas <span className="sub-color">te acompa;a</span></h1>
                    <p>Nos encargamos de brindarte cobertura total en cada paso del camino. Teniendo siempre presente las necesidades del consumidor y proveyendo atencion personalizada</p>
                </div>
            </div>
            <div className="servicios-container wrapper">
                <div className="servicios-card" id="servicios-1">
                    <h2>Llevando tus ideas a la realidad</h2>
                    <div className="servicios-text wrapper">
                        <p className="servicios-p">Registro de marcas</p>
                        <p className="servicios-p">Registro de patentes</p>
                        <p className="servicios-p">Transferencias</p>
                    </div>
                </div>
                <div className="servicios-card" id="servicios-2">
                    <h2>Construyendo puentes</h2>
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