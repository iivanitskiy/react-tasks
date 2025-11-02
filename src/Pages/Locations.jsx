import { Suspense, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

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
		<>
			{loading && locations.length === 0 &&<h1>Loading</h1>}
			{error && <h1>Error</h1>}
			<Suspense fallback="Загрузка">
				<div className="container">
					{locations.map(location => (
						<Link to={`/locations/${location.id}`} key={location.id}>
							<div className="card">
								<div className="info">
									<h2 className="name">{location.name}</h2>
									<p className="detail"><strong>Тип:</strong> {location.type}</p>
									<p className="detail"><strong>Измерение:</strong> {location.dimension}</p>
									<p className="detail"><strong>Создан:</strong> {location.created}</p>
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

export default Locations