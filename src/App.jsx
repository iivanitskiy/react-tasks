import { useFetch } from './useFetch';
import { useLocalStorage } from './useLocalStorage';
import { useHover } from './useHover';
import { useViewportSize } from './useViewportSize';
import './App.css'

function App() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  const { hovered, ref } = useHover();

  const { height, width } = useViewportSize();

  return (
    <>
      <div>
        <div>
          <button onClick={() => refetch({
            params: {
              _limit: 3
            }
          })}>
            Перезапросить
          </button>
        </div>
        {isLoading && 'Загрузка...'}
        {error && 'Произошла ошибка'}
        {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
      </div>

      <div>
        <p>Значение из LocalStorage: {value}</p>
        <div>
          <button onClick={() => setItem('new storage value')}>Задать значение</button>
          <button onClick={() => removeItem()}>Удалить значение</button>
        </div>
      </div>

      <div ref={ref} style={{ marginTop: '20px', padding: '20px', border: '1px solid black' }}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>

      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid white' }}>
        Width: {width}, height: {height}
      </div>

    </>
  )
}

export default App
