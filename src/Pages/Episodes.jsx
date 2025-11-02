import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

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
		<>
			{loading && episodes.length === 0 &&<h1>Loading</h1>}
			{error && <h1>Error</h1>}
			<Suspense fallback="Загрузка">
				<div className="container">
					{episodes.map(episode => (
						<Link to={`/episodes/${episode.id}`} key={episode.id}>
							<div className="card">
								<div className="info">
									<h2 className="name">{episode.name}</h2>
									<p className="detail"><strong>Дата выхода в эфир:</strong> {episode.air_date}</p>
									<p className="detail"><strong>Эпизод:</strong> {episode.episode}</p>
									<p className="detail"><strong>Создан:</strong> {episode.created}</p>
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

export default Episodes
