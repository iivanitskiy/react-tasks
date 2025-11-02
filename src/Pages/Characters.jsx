import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const url = 'https://rickandmortyapi.com/api/character';

function Characters() {
  const { data: characters, loading, error, hasMore, loadMore } = useInfiniteScroll(url);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      if (hasMore && !loading) {
        loadMore();
      }
    }
  }, [hasMore, loading, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {loading && characters.length === 0 && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      <Suspense fallback="Загрузка">
        <div className="container">
          {characters.map(character => (
            <Link to={`/characters/${character.id}`} key={character.id}>
              <div className="card">
                <img src={character.image} alt={character.name} className="image" />
                <div className="info">
                  <h2 className="name">{character.name}</h2>
                  <p className="detail"><strong>Статус:</strong> <span className={`status ${character.status}`}>{character.status}</span></p>
                  <p className="detail"><strong>Вид:</strong> {character.species}</p>
                  <p className="detail"><strong>Тип:</strong> {character.type || 'Не указан'}</p>
                  <p className="detail"><strong>Пол:</strong> {character.gender}</p>
                  <p className="detail"><strong>Создан:</strong> {character.created}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
      {hasMore && <p style={{ textAlign: 'center', padding: '20px' }}>Загрузка...</p>}
    </>
  )
}

export default Characters
