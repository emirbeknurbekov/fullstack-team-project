import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, toggleFavorite } from '../../store/post/postAction'

const Favorites = () => {
    const { loading, favorites } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

  return (
    <div>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
                {favorites.length ? (
                    <div>
                        {favorites.map(favoriteObj => (
                            <div key={favoriteObj.id}>
                                <img src={favoriteObj.image} alt={favoriteObj.title} width="100" height="100" />
                                <p>{favoriteObj.vacancy}</p>
                                <p>${favoriteObj.salary}</p>
                                <button onClick={() => dispatch(toggleFavorite({ postId: favoriteObj.id }))}>Remove from favorite</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3>No favorites yet!</h3>
                )}
            </>
        )}
    </div>
  )
}

export default Favorites