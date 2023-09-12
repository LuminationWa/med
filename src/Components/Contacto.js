import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';


const Contacto = () => {
    const buttonStyle = {
        marginTop: '1rem',
    };
    return (
        <main className="contacto-main">
            <h1 className="h1">Contacto</h1>

            <div className="media-div media-multi">
                <InstagramIcon fontSize='small' />
                <FacebookIcon fontSize='small' />
                <TwitterIcon fontSize='small' />
            </div>

            <form className="contacto-form" action="mailto:example@gmail.com" method="post" encType="text/plain">
                <TextField required id="nombre" label="Nombre" variant="standard" />
                <TextField required id="correo" label="Correo" variant="standard" />
                <TextField id="telefono" label="Telefono" variant="standard" />
                <TextField multiline rows={3} required id="mensaje" label="Mensaje" variant="standard" />
                <Button variant="contained" style={buttonStyle}>
                    Enviar
                </Button>

            </form>
            <div className="media-info wrapper">
                <div className="media-div">
                    <NearMeIcon />
                    Av. Garibaldi 2185, Montevideo, Uruguay
                </div>
                <div className="media-div">
                    <EmailIcon />
                    info@medinamarcas.com
                </div>
                <div className="media-div">
                    <RingVolumeIcon />
                    +598 22039306
                </div>
                <div className="media-div">
                    <RingVolumeIcon />
                    Fax +598 22007474
                </div>
                <div className="media-div">
                    <WhatsAppIcon />
                    +598 98987250
                </div>
            </div>

        </main>
    )
}

export default Contacto;