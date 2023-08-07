import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = () => {
    return (
        <main className="home-main wrapper">
            <div className="top-section">
                <div className="top-section-content">
                    <h1>Somos los mejores</h1>
                    <p>TextTextTextTextTextText</p>
                    <Button variant="outlined">Entra en contacto</Button>

                </div>
            </div>
            <div className="middle-section wrapper">
                <div className="left-side">
                    <div className="info-container">
                        <h2 className="middle-h2">Por que registrar mi marca?</h2>
                        <p className="middle-p">Al registrar una marca, el titular obtiene derechos exclusivos en el país donde la registra, lo que le permite actuar legalmente contra el uso no autorizado por terceros.
                            Aunque el registro de marca no es obligatorio en Uruguay, no hacerlo puede exponer al titular a conflictos legales si otro solicitante registra una marca similar.
                            El registro otorga un derecho transferible, a menudo valioso para las empresas, que puede ser licenciado en acuerdos onerosos o gratuitos.</p>
                    </div>
                    <div className="info-container">
                        <h2 className="middle-h2">Por que elergirnos?</h2>
                        <p className="middle-p">Ofrecemos una presencia física y en línea para atender tus necesidades y brindar máxima confianza.
                            Nuestros profesionales titulados tienen experiencia práctica en diversas áreas del mundo real.
                            Conocemos las leyes y procesos de marcas y patentes de todos los países de América, asegurando un control exhaustivo y actualizado en cada tarea encomendada.
                            Trabajamos con colegas selectos en toda América y asumimos la responsabilidad para proteger tus intereses en derecho comercial e intelectual.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-info">
                        <h1 className="middle-h1">1000+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                    <div className="right-info">
                        <h1 className="middle-h1">1000+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                    <div className="right-info">
                        <h1 className="middle-h1">1000+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                    <div className="right-info">
                        <h1 className="middle-h1">1000+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                    <div className="right-info">
                        <h1 className="middle-h1">1000+</h1>
                        <p className="right-p">Casos ganados</p>
                    </div>
                </div>
            </div>
            <div class="horizontal-line"></div>
            <div className="faq-section">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel0a-content"
                        id="panel0a-header"
                    >
                        <Typography>¿Qué es una marca?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Es definida por nuestra normativa vigente como todo signo con la aptitud suficiente para distinguir ya sea productos o servicios (dependiendo las clases a la/s que se solicite/registre), de una persona física o jurídica de otra.



                            Un signo a solicitar o registrar, puede ser de varios tipos:

                            -solo la palabra o palabras,

                            -palabra/s con un dibujo,

                            -dibujo solo,

                            -frases publicitarias,

                            -sonidos,

                            -aromas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Cómo es el procedimiento de Solicitud de una Marca?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Previamente es aconsejable realizar una Búsqueda de Marcas en el Registro, aunque no es obligatorio, se recomienda, y con el estudio de factibilidad siguiente, se sabrán de antemano cuáles serían los posibles interesados en impedir el registro a solicitar. O los antecedentes que podrían ser oponibles de oficio por la oficina técnica estatal encargada de los registros.



                            La Solicitud de Marca, requiere la identificación del signo a pedir, el que luego de ser ingresado no puede cambiarse. Además de los datos del solicitante (nombre y apellido en caso de persona física o denominación si es una persona jurídica, identificación con documento de identidad o registro tributario, dirección física en Uruguay u otro país. La clase o clases para la/s que se pide.



                            Si el solicitante se domicilia en el extranjero, fuera del país donde se solicita el registro de marca, debe ser representado por un Agente de Marcas o una persona física designada mediante poder especial.



                            Luego del ingreso se le asigna un número de acta, el que identificará esa solicitud.

                            Paso el examen formal primario, publica en el Boletín oficial de Marcas y Patentes, lo que da inicio al plazo perentorio e improrrogable de presentación de oposiciones de terceros. El plazo es de treinta días.



                            Quedando posteriormente al examen formal último, en el que se agregan los antecedentes de oficio que la oficina estatal informa sobre los registros previos, oposiciones de terceros ingresadas. Notificando y dando plazo para su contestación

                            Si no existieran oposiciones, ni antecedentes de oficio, y se cumpliera con la normativa que permita que ese signo se registre, se resolverá favorablemente a nombre del solicitante, concediéndolo por un plazo de diez años. Prorrogables por períodos iguales.


                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='test'>¿Qué es una Patente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Es el derecho que le otorga el registro en la oficina competente sobre una invención a su titular.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>¿Qué tipos de Patentes se pueden registrar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            ¿Qué tipos de Patentes se pueden registrar?.



                            De Invención, Modelos de Utilidad, Diseños Industriales.



                            Dependiendo del objeto a patentar, cumpliendo con tener actividad inventiva ser susceptible de tener aplicación industrial:

                            -Invención: nuevos productos o de procedimientos (invención);

                            -Modelo de Utilidad: una nueva disposición o conformación obtenida o introducida en herramientas, instrumentos de trabajo, utensilios, dispositivos, equipos u otros objetos conocidos, por lo que se obtenga una mejor utilización o mejor resultado para su fin,  para su uso o fabricación.

                            -Diseños Industriales: creaciones originales ornamentales que le otorguen una apariencia diferentes aplicado al producto.



                            Otorgada la patente le permite previo pago de anualidades, exclusividad de veinte años en invenciones y diez años en modelos de utilidad o diseños industriales (prorrogables por cinco años en modelos de utilidad y diseños industriales).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography>¿Cómo es el procedimiento de Solicitud de Patente?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Se aconseja la búsqueda previa tanto nacional como internacional.



                            Luego de la presentación de la Solicitud de Patentes, con todos los requisitos necesarios para su presentación que es diferente que en marcas, se realiza un examen primario de formalidades y de patentabilidad, transcurridos los plazo legales publica en el Boletín Oficial de Marcas.



                            Se inicia el plazo para las presentaciones de Oposiciones por terceros, sesenta días posteriores a la publicación.



                            Si el Estado de la técnica lo permite, no se presentaron oposiciones de terceros, ni hay impedimentos normativos, se resuelve concediendo la patente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div class="horizontal-line"></div>
            <footer></footer>
        </main>
    )
}

export default Home;