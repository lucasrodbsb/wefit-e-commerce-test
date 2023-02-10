import * as C from './header.styled'
import cartBag from '../../assets/images/cart-bag.svg'
import { Link } from 'react-router-dom';

interface Props {
    itemsQuantity: number
}

const Header = (props: Props) => {
    return(
        <C.HeaderContainer mgBottom="24px">
            <C.Logo>WeMovies</C.Logo>
            <C.Cart>
                <C.Info>
                    <C.CartTitle>Meu Carrinho</C.CartTitle>
                    <C.Items>{ props.itemsQuantity } itens</C.Items>
                </C.Info>
                <Link to='/cart'>
                    <C.Bag src={cartBag} alt="cart-bag" />
                </Link>
            </C.Cart>
        </C.HeaderContainer>
    )
} 

export default Header;