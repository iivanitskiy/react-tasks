import { Link } from 'react-router-dom'
import episodes from '../Routes/episode'
import './Styles.css'

function Episodes() {

	return (
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
	)
}

export default Episodes
