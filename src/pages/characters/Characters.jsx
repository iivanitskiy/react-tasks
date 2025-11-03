import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Card, Image, Title, Container } from '@mantine/core';
import '../../pages/styles/Styles.css';
import { useInfiniteScroll } from '../../features/hooks/lib/useInfiniteScroll';

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
    <Paper shadow="xl" p="xl" style={{ display: "grid", gridTemplateColumns: "repeat(3, 3fr)", gap: "20px" }} >
      {loading && characters.length === 0 && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      <Suspense fallback="Загрузка">
        {characters.map(character => (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link to={`/characters/${character.id}`} key={character.id} style={{textDecoration: "none", color: "black"}}>
              <Card.Section>
                <Image
                  src={character.image}
                  alt={character.name}
                />
              </Card.Section>
              <Title order={2}>{character.name}</Title>
              <Typography size="md"><strong>Статус:</strong> <span className={`status ${character.status}`}>{character.status}</span></Typography>
              <Typography size="md"><strong>Вид:</strong> {character.species}</Typography>
              <Typography size="md"><strong>Тип:</strong> {character.type || 'Не указан'}</Typography>
              <Typography size="md"><strong>Пол:</strong> {character.gender}</Typography>
              <Typography size="md"><strong>Создан:</strong> {character.created}</Typography>
            </Link>
          </Card>
        ))}

      </Suspense>
      {hasMore && <p style={{ textAlign: 'center', padding: '20px' }}>Загрузка...</p>}
    </Paper>
  )
}

export default Characters
