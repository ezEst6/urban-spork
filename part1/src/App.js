//Los componentes siempre fuera de otros componenttes
import './App.css';
import Header from './Header';
import Part from './Part';

const course = {
	title: 'Half Stack application development',
	parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10,
		},
		{
			name: 'Using props to pass data',
			exercises: 7,
		},
		{
			name: 'State of a component',
			exercises: 14,
		},
	],
};

const Content = () => {
	return (
		<div>
			<Part number={course.parts[0].exercises} name={course.parts[0].name} />
			<Part number={course.parts[1].exercises} name={course.parts[1].name} />
			<Part number={course.parts[2].exercises} name={course.parts[2].name} />
		</div>
	);
};

const Total = () => {
	let total = course.parts.map(function (parts) {
		return parts.exercises;
	});
	const reducer = (accumulator, curr) => accumulator + curr;
	return <p>Number of exercises {total.reduce(reducer)}</p>;
};

function App() {
	return (
		<div className="App">
			<Header title={course.title} />
			<Content />
			<Total />
		</div>
	);
}

export default App;
