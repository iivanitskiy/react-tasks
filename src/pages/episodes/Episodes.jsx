import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Card, Title } from '@mantine/core';
import '../styles/Styles.css';
import { useInfiniteScroll } from '../../features/hooks/lib/useInfiniteScroll';

const url = 'https://rickandmortyapi.com/api/episode';

function Episodes() {
	const { data: episodes, loading, error, hasMore, loadMore } = useInfiniteScroll(url);

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
			{loading && episodes.length === 0 && <h1>Loading</h1>}
			{error && <h1>Error</h1>}
			<Suspense fallback="Загрузка">
				{episodes.map(episode => (
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Link to={`/episodes/${episode.id}`} key={episode.id} style={{ textDecoration: "none", color: "black" }}>
							<Title order={2}>{episode.name}</Title>
							<Typography><strong>Дата выхода в эфир:</strong> {episode.air_date}</Typography>
							<Typography><strong>Эпизод:</strong> {episode.episode}</Typography>
							<Typography><strong>Создан:</strong> {episode.created}</Typography>
						</Link>
					</Card>
				))}

			</Suspense>
			{hasMore && <p style={{ textAlign: 'center', padding: '20px' }}>Загрузка...</p>}
		</Paper>
	)
}

export default Episodes
