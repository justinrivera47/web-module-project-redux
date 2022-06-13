import React from 'react';
import { connect } from 'react-redux';
import { addFavorite } from './../actions/favoritesActions'
import { Link } from 'react-router-dom';
import { removeFavorite } from './../actions/favoritesActions'


const FavoriteMovieList = (props) => {
    const { favorites } = props.favoritesReducer;
    
    const handleDeleteFavorite = (id) => {
        props.removeFavorite(id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handleDeleteFavorite(movie.id)}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(st => st, {addFavorite, removeFavorite})(FavoriteMovieList);