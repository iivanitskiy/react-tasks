import { Link } from 'react-router-dom'
import locations from '../Routes/location'
import './Styles.css'

function Locations() {

	return (
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
	)
}

export default Locations