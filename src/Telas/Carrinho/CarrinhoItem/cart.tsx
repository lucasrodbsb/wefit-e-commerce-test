import React from "react";
import * as C from './cart.styled'
import Header from '../../../Components/header/header'
import miranha from '../../../assets/images/miranha.png'
import Minus from '../../../assets/images/minus.svg'
import Plus from '../../../assets/images/plus.svg'
import TrashBag from '../../../assets/images/trash.svg'

const Cart = () => {
    return (
        <>
            <Header itemsQuantity={0} />
            <C.CartContainer>
                <C.CartInfosArea>
                    <C.Product>
                        <C.DescTitle>PRODUTO</C.DescTitle>
                        <C.DescProd gap='40px'>
                            <C.DescMoviePoster src={miranha} alt="miranhaPlaceholder" />
                            <C.TitlePrice>
                                <C.Title>Homem Aranha</C.Title>
                                <C.Price>R$ 29,99</C.Price>
                            </C.TitlePrice>
                        </C.DescProd>
                    </C.Product>
                    <C.Qtd>
                        <C.DescTitle>QTD</C.DescTitle>
                        <C.DescProd gap='10px'>
                            <C.Multiply src={Minus} alt="Minus" />
                            <C.Input type='text'>

                            </C.Input>
                            <C.Multiply src={Plus} alt="Plus" />
                        </C.DescProd>
                    </C.Qtd>
                    <C.Subtotal>
                        <C.DescTitle>SUBTOTAL</C.DescTitle>
                        <C.DescProd gap='40px'>
                            {/* <C.DescMoviePoster src={miranha} alt="miranhaPlaceholder" /> */}
                            <C.TitlePrice>
                                {/* <C.Title>Homem Aranha</C.Title> */}
                                <C.Price>R$ 29,99</C.Price>
                            </C.TitlePrice>
                        </C.DescProd>
                    </C.Subtotal>
                    <C.Trash src={TrashBag} alt="Trash" />
                </C.CartInfosArea>
            </C.CartContainer>
        </>
    )
}
export default Cart