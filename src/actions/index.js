export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
});

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
});

export const signIn = user => ({
  type: 'SIGN_IN',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const createAcct = (name, email, password) => ({
  type: 'CREATE_ACCT',
  name,
  email,
  password
});

export const hasErrored = errorMessage => ({
  type: 'HAS_ERRORED',
  errorMessage
});


export const setHover = id => ({
  type: 'SET_HOVER',
  id
});

export const addFavorite = (fave) => ({
  type: 'ADD_FAVORITE',
  fave
});

export const viewFavorites = (allFaves) => ({
    type: 'VIEW_FAVORITES',
    allFaves
});
export const cancelHover = id => ({
  type: 'CANCEL_HOVER',
  id
});


export const deleteFavorite = (id) => ({
    type: 'DELETE_FAVORITE',
    id
});
