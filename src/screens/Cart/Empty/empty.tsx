import InfoAlert from '../../../Components/infoalert/infoalert';
import emptyImg from '../../../assets/images/emptyimg.png';

const EmptyCart = () => {
    
    const emptyMsg = 'Parece que não há nada por aqui :(';
    return(
        <>
            <InfoAlert infoText={emptyMsg} image={emptyImg}/>
        </>
    )
}

export default EmptyCart;