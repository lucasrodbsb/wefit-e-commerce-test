import InfoAlert from "../../Components/infoalert/infoalert";
import aprovedImg from '../../assets/images/aprovedimg.png';
import Header from "../../Components/header/header";

const Aproved = () => {
    
    const aprovedMsg = 'Compra realizada com sucesso!';
    return(
        <>
        <Header itemsQuantity={0}/>
            <InfoAlert infoText={aprovedMsg} image={aprovedImg}/>
        </>
    )
}

export default Aproved