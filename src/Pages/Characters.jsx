import { Link } from 'react-router-dom'
import characters from '../Routes/characters'
import './Styles.css'

function Characters() {

  return (

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

  )
}

export default Characters
