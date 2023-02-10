import InfoAlert from "../../Components/infoalert/infoalert";
import aprovedImg from '../../assets/images/aprovedimg.png';

const Aproved = () => {
    
    const aprovedMsg = 'Compra realizada com sucesso!';
    return(
        <>
            <InfoAlert infoText={aprovedMsg} image={aprovedImg}/>
        </>
    )
}

export default Aproved