import React from "react";
import * as C from "../../Components/moviecard/moviecard.styled";
import cart from '../../assets/images/carrinho.svg'

interface Props {
    moviePoster?: string,
    movieTitle?: string,
    moviePrice?: number,
    movieColorBtn?: string,
    movieTxtBtn?: string,
    movieNumItens?: number,
    onClick: () => void
}


const MovieCard = (props: Props) => {
    return(
        <C.MovieArea>
            <C.Poster src={props.moviePoster} alt="filmPoster" />
            <C.MovieTitle>
                {props.movieTitle}
            </C.MovieTitle>
            <C.MoviePrice>
                R$ {props.moviePrice}
            </C.MoviePrice>
            <C.AddMovieBtn bgColor={props.movieColorBtn} onClick={props.onClick}>
                <C.LeftDiv>
                    <C.CartImg src={cart} alt="cart" />
                    <C.NumItems>{props.movieNumItens}</C.NumItems>
                </C.LeftDiv>
                
                <C.BtnText>{props.movieTxtBtn}</C.BtnText>
            </C.AddMovieBtn>
        </C.MovieArea>
    )
}

export default MovieCard;