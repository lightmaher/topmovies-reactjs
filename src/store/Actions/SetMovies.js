
export  function SetFavMovies(payload) {
  return {
      type:"SET_MOVIES",
      payload
  }
}

export  function delFavMovies(payload) {
  return {
      type:"DEL_MOVIE",
      payload
  }
}
