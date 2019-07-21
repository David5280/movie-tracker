import React from 'react';
import { connect } from 'react-redux'
import { addNewFavorite } from '../utilz/apiCalls'
import { addFavorite, viewFavorites, deleteFavorite } from '../actions'
import activeFavIcon from '../images/001-heart.svg'
// import inactiveFavIcon from '../images/002-heart-1.svg'

// const MoviePoster = ({title, overview, releaseDate, vote_average, posterPath, id, setHover, cancelHover, addFavorite }) => {
// }

class MoviePoster extends React.Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false,
      currentHover: false
    }
  }
  
  handleFavorite = async () => {
    // e.preventDefault();
    const newFave = await addNewFavorite()
    this.props.addFavorite(newFave)
    console.log(newFave)
    this.setState({isFavorited: !this.state.isFavorited})
    
  }
  
  render() {
    const { posterPath, title, id } = this.props;
    return(
      <article className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={`${title}-poster`} className='poster-img'/>
        <p className='poster-title'>{title}</p>
        <img src={activeFavIcon} onClick={e => this.handleFavorite(id)} className='favorite-icon' alt='favorite-icon'/>
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addFavorite: fave => dispatch(addFavorite(fave)),
  viewFavorites: allFaves => dispatch(viewFavorites(allFaves)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
})

export default connect(null, mapDispatchToProps)(MoviePoster);