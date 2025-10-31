import { useParams, useLocation } from 'react-router-dom'
import characters from '../Routes/characters'
import episodes from '../Routes/episode'
import locations from '../Routes/location'
import './Styles.css'

function Element() {
  const { id } = useParams()

  const location = useLocation()
  const path = location.pathname
  let element = null
  
  if (path.includes('/characters/')) {
    element = characters.find(char => char.id === parseInt(id))
  } else if (path.includes('/episodes/')) {
    element = episodes.find(ep => ep.id === parseInt(id))
  } else if (path.includes('/locations/')) {
    element = locations.find(loc => loc.id === parseInt(id))
  }

	if (!element) {
	   return <div>Элемент не найден</div>
	 }
	 
	 const renderElementDetails = () => {
	   if (path.includes('/characters/')) {
	     return (
	       <>
	         <img src={element.image} alt={element.name} className="image" />
	         <div className="info">
	           <h2 className="name">{element.name}</h2>
	           <p className="detail"><strong>Статус:</strong> <span className={`status ${element.status}`}>{element.status}</span></p>
	           <p className="detail"><strong>Вид:</strong> {element.species}</p>
	           <p className="detail"><strong>Тип:</strong> {element.type || 'Не указан'}</p>
	           <p className="detail"><strong>Пол:</strong> {element.gender}</p>
	           <p className="detail"><strong>Создан:</strong> {element.created}</p>
	         </div>
	       </>
	     )
	   } else if (path.includes('/episodes/')) {
	     return (
	       <div className="info">
	         <h2 className="name">{element.name}</h2>
	         <p className="detail"><strong>Дата выхода в эфир:</strong> {element.air_date}</p>
	         <p className="detail"><strong>Эпизод:</strong> {element.episode}</p>
	         <p className="detail"><strong>Создан:</strong> {element.created}</p>
	       </div>
	     )
	   } else if (path.includes('/locations/')) {
	     return (
	       <div className="info">
	         <h2 className="name">{element.name}</h2>
	         <p className="detail"><strong>Тип:</strong> {element.type}</p>
	         <p className="detail"><strong>Измерение:</strong> {element.dimension}</p>
	         <p className="detail"><strong>Создан:</strong> {element.created}</p>
	       </div>
	     )
	   }
	 }
	 
	 return (
	   <div className="container">
	     <div key={element.id} className="card">
	       {renderElementDetails()}
	     </div>
	   </div>
	 )
}

export default Element