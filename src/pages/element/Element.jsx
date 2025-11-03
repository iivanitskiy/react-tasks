import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Typography, Title, Container, Card, Image } from '@mantine/core';
import '../../pages/styles/Styles.css'

function Element() {
  const { id } = useParams()
  const location = useLocation()
  const path = location.pathname
  
  const [element, setElement] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchElement = async () => {
      setLoading(true)
      setError(null)
      
      try {
        let url = ''
        if (path.includes('/characters/')) {
          url = `https://rickandmortyapi.com/api/character/${id}`
        } else if (path.includes('/episodes/')) {
          url = `https://rickandmortyapi.com/api/episode/${id}`
        } else if (path.includes('/locations/')) {
          url = `https://rickandmortyapi.com/api/location/${id}`
        }
        
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Элемент не найден')
        }
        const data = await response.json()
        setElement(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchElement()
  }, [id, path])

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  if (!element) {
    return <div>Элемент не найден</div>
  }
  
  const renderElementDetails = () => {
    if (path.includes('/characters/')) {
      return (
        <>
          <Image src={element.image} alt={element.name} />
          <Container>
            <Title order={2}>{element.name}</Title>
            <Typography><strong>Статус:</strong> <span className={`status ${element.status}`}>{element.status}</span></Typography>
            <Typography><strong>Вид:</strong> {element.species}</Typography>
            <Typography><strong>Тип:</strong> {element.type || 'Не указан'}</Typography>
            <Typography><strong>Пол:</strong> {element.gender}</Typography>
            <Typography><strong>Создан:</strong> {element.created}</Typography>
          </Container>
        </>
      )
    } else if (path.includes('/episodes/')) {
      return (
        <Container>
          <Title order={2}>{element.name}</Title>
          <Typography><strong>Дата выхода в эфир:</strong> {element.air_date}</Typography>
          <Typography><strong>Эпизод:</strong> {element.episode}</Typography>
          <Typography><strong>Создан:</strong> {element.created}</Typography>
        </Container>
      )
    } else if (path.includes('/locations/')) {
      return (
        <Container>
          <Title order={2}>{element.name}</Title>
          <Typography><strong>Тип:</strong> {element.type}</Typography>
          <Typography><strong>Измерение:</strong> {element.dimension}</Typography>
          <Typography><strong>Создан:</strong> {element.created}</Typography>
        </Container>
      )
    }
  }
  
  return (
    <Container >
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {renderElementDetails()}
      </Card>
    </Container>
  )
}

export default Element