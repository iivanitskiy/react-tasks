import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Card, Title } from '@mantine/core';
import '../styles/Styles.css';
import { useInfiniteScroll } from '../../features/hooks/lib/useInfiniteScroll';

const url = 'https://rickandmortyapi.com/api/location';

function Locations() {
	const { data: locations, loading, error, hasMore, loadMore } = useInfiniteScroll(url);

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
			{loading && locations.length === 0 && <h1>Loading</h1>}
			{error && <h1>Error</h1>}
			<Suspense fallback="Загрузка">
				{locations.map(location => (
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Link to={`/locations/${location.id}`} key={location.id} style={{ textDecoration: "none", color: "black" }}>
							<Title order={2}>{location.name}</Title>
							<Typography><strong>Тип:</strong> {location.type}</Typography>
							<Typography><strong>Измерение:</strong> {location.dimension}</Typography>
							<Typography><strong>Создан:</strong> {location.created}</Typography>
						</Link>
					</Card>
				))}
			</Suspense>
			{hasMore && <p style={{ textAlign: 'center', padding: '20px' }}>Загрузка...</p>}
		</Paper>
	)
}

export default Locations