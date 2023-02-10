import React, {useEffect, useState} from "react";
import * as C from './home.styled'
import MovieCard from '../../Components/moviecard/moviecard'
import { Link } from "react-router-dom";

import data from "../../services/api/server";
import Loading from "../../Components/loading/loading";
import MoviesType from "../../types/movies";
import Header from "../../Components/header/header";

const blueColorBtn = "#009EDD";
const greenColorBtn = "#039B00"

const txtDefaultAddMovie = 'ADICIONAR AO CARRINHO';
const txtActiveMovie = 'ITEM ADICIONADO';

const Home = () => {
    const [dataMovies, setDataMovies] = useState<MoviesType[] | null>(null);

    useEffect(() => {
        findMovies()
    }, [])

    const findMovies = () => {
        let json: MoviesType[] = data.products.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: 0
            }
        })
        setDataMovies(json)
    }

    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        calc()
    }, [dataMovies])

    const calc = () => {
        let quantity: number = 0
        dataMovies?.map((item) => {
            quantity += item.quantity
        })
        setTotal(quantity)
    }

    return(
        <>
            <Header itemsQuantity={total} />
            <C.HomeContainer>
                {
                    dataMovies == null
                    ? <Loading />
                    : dataMovies.map((item, index) => (
                        <MovieCard 
                            moviePoster={item.image} 
                            movieTitle={item.title}
                            moviePrice={item.price}
                            movieColorBtn={!item.quantity ? blueColorBtn : greenColorBtn}
                            movieNumItens={item.quantity}
                            movieTxtBtn={!item.quantity ? txtDefaultAddMovie : txtActiveMovie}
                            onClick={() => {
                                setDataMovies(
                                    dataMovies.map(item =>
                                        item.id === index+1
                                        ? { ...item, quantity: item.quantity+1 }
                                        : item
                                        )
                                        )
                            }}
                        />
                    ))
                }
            </C.HomeContainer>
        </>
    )
}

export default Home;