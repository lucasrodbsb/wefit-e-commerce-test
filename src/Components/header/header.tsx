import * as C from './header.styled'
import cartBag from '../../assets/images/cart-bag.svg'

const Header = () => {
    return(
        <C.HeaderContainer mgBottom="24px">
            <C.Logo>WeMovies</C.Logo>
            <C.Cart>
                <C.Info>
                    <C.CartTitle>Meu Carrinho</C.CartTitle>
                    <C.Items>0 itens</C.Items>
                </C.Info>
                <C.Bag src={cartBag} alt="cart-bag" />
            </C.Cart>
        </C.HeaderContainer>
    )
} 

export default Header;