import React, { useEffect, useState } from "react";
import * as C from './cart.styled'
import Header from '../../../Components/header/header'
import Minus from '../../../assets/images/minus.svg'
import Plus from '../../../assets/images/plus.svg'
import TrashBag from '../../../assets/images/trash.svg'
import MoviesType from "../../../types/movies";
import { currency } from "../../../constants/formats";
import EmptyCart from "../Empty/empty";
import { Link } from "react-router-dom";

const Cart = () => {
    const [movies, setMovies] = useState<MoviesType[] | null>(null)
    const [qt, setQt] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        findMovies()
    }, [])

    const findMovies = () => {
        let json = JSON.parse(localStorage.getItem('movies') || '[]')
        setQt(Number(localStorage.getItem('total')))
        setMovies(json)
    }

    const quantity = (item: MoviesType, movies: MoviesType[], type: 'plus' | 'minus') => {
        if (item.quantity === 1 && type === 'minus')
            return
        setMovies(
            movies.map(movie =>
                movie.id === item.id
                    ? { ...movie, quantity: type === 'plus' ? movie.quantity + 1 : movie.quantity - 1 }
                    : movie
            )
        )

        if (type === 'minus')
            setQt(qt - 1)
        else
            setQt(qt + 1)
    }

    useEffect(() => {
        calc()
    }, [movies])

    const calc = () => {
        let total = 0;
        movies?.map((item) => {
            let totalItem = item.quantity * item.price
            total += totalItem
        })
        setTotal(total)
    }

    const remove = (index: number) => {
        if (movies == null) return

        let json = [...movies];
        setQt(qt - json[index].quantity)
        delete json[index]
        setMovies(json)
    }

    return (
        <>
            <Header itemsQuantity={qt} />
            {
                total <= 0
                    ? <EmptyCart />
                    : (
                        <C.CartContainer>
                            <C.Header>
                                <C.TextHeader flex={3}>PRODUTO</C.TextHeader>
                                <C.TextHeader flex={1}>QTD</C.TextHeader>
                                <C.TextHeader flex={2}>SUBTOTAL</C.TextHeader>
                            </C.Header>
                            {
                                movies?.map((item, index) => (
                                    <>
                                        <C.Product>
                                            <C.DescProd gap='40px'>
                                                <C.DescMoviePoster src={item.image} alt="filmPoster" />
                                                <C.TitlePrice>
                                                    <C.Title>{item.title}</C.Title>
                                                    <C.Price>R$ {currency(item.price, 2, 3, '.', ',')}</C.Price>
                                                </C.TitlePrice>
                                            </C.DescProd>
                                            <C.Qtd>
                                                <C.DescProd gap='10px'>
                                                    <C.Multiply src={Minus} alt="Minus" onClick={() => quantity(item, movies, 'minus')} />
                                                    <C.Input type='text' value={item.quantity} />
                                                    <C.Multiply src={Plus} alt="Plus" onClick={() => quantity(item, movies, 'plus')} />
                                                </C.DescProd>
                                            </C.Qtd>
                                            <C.Subtotal>
                                                <C.DescProd gap='40px'>
                                                    <C.TitlePrice>
                                                        <C.Price>R$ {currency(item.quantity * item.price, 2, 3, '.', ',')}</C.Price>
                                                    </C.TitlePrice>
                                                </C.DescProd>
                                            </C.Subtotal>
                                            <C.Trash src={TrashBag} alt="Trash" onClick={() => remove(index)} />
                                        </C.Product>
                                        <C.ResponsiveItem>
                                            <C.RPoster src={item.image} alt="filmPoster" />
                                            <C.RDesc>
                                                <C.RFirstLine>
                                                    <C.RTitle>{item.title}</C.RTitle>
                                                    <C.RPrice>R$ {currency(item.price, 2, 3, '.', ',')}</C.RPrice>
                                                    <C.RTrash src={TrashBag} alt="RTrash" onClick={() => remove(index)} />
                                                </C.RFirstLine>

                                                <C.RFirstLine>
                                                    <C.RMultDiv>
                                                        <C.Multiply src={Minus} alt="Minus" onClick={() => quantity(item, movies, 'minus')} />
                                                        <C.Input type='text' value={item.quantity} />
                                                        <C.Multiply src={Plus} alt="Plus" onClick={() => quantity(item, movies, 'plus')} />
                                                    </C.RMultDiv>
                                                    <C.RSubTotal>
                                                    <C.TextHeader>SUBTOTAL</C.TextHeader>
                                                        <C.Price>R$ {currency(item.quantity * item.price, 2, 3, '.', ',')}</C.Price>
                                                    </C.RSubTotal>
                                                </C.RFirstLine>

                                            </C.RDesc>
                                        </C.ResponsiveItem>

                                    </>
                                ))
                            }

                            <C.Line></C.Line>
                            <C.Footer>
                                <Link to="/aproved" style={{ textDecoration: 'none', color: '#FFF', width: '100%' }}>
                                    <C.BuyBtn>FINALIZAR PEDIDO</C.BuyBtn>
                                </Link>
                                <C.TotalInfo>
                                    <C.TextHeader>TOTAL</C.TextHeader>
                                    <C.Total>R$ {currency(total, 2, 3, '.', ',')}</C.Total>
                                </C.TotalInfo>
                            </C.Footer>
                        </C.CartContainer>
                    )
            }
        </>
    )
}

export default Cart