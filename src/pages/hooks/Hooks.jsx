import { Button, Input } from '@mantine/core';
import { useFetch } from '../../features/hooks/lib/useFetch';
import { useLocalStorage } from '../../features/hooks/lib/useLocalStorage';
import { useHover } from '../../features/hooks/lib/useHover';
import { useViewportSize } from '../../features/hooks/lib/useViewportSize';
import { useWindowScroll } from '../../features/hooks/lib/useWindowScroll';
import { useToggle } from '../../features/hooks/lib/useToggle';

function Hooks() {
	const {
		data,
		isLoading,
		error,
		refetch
	} = useFetch('https://jsonplaceholder.typicode.com/posts');
	const [value, { setItem, removeItem }] = useLocalStorage('some-key');
	const { hovered, ref } = useHover();
	const { height, width } = useViewportSize();
	const [scroll, scrollTo] = useWindowScroll();
	const [val, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return (
		<div>
			<div>
				<div>
					<Button onClick={() => refetch({
						params: {
							_limit: 3
						}
					})}>
						Перезапросить
					</Button>
				</div>
				{isLoading && 'Загрузка...'}
				{error && 'Произошла ошибка'}
				{data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
			</div>

			<div>
				<p>Значение из LocalStorage: {value}</p>
				<div>
					<Button onClick={() => setItem('new storage value')}>Задать значение</Button>
					<Button onClick={() => removeItem()}>Удалить значение</Button>
				</div>
			</div>

			<div ref={ref} style={{ marginTop: '20px', padding: '20px', border: '1px solid black' }}>
				{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
			</div>

			<div style={{ marginTop: '20px', padding: '20px', border: '1px solid white' }}>
				Width: {width}, height: {height}
			</div>

			<div>
				<p>
					Scroll position x: {scroll.x}, y: {scroll.y}
				</p>
				<Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
			</div>

			<Button style={{ marginTop: '20px' }} onClick={() => toggle()}>
				{val}
			</Button>

		</div>
	)
}

export default Hooks