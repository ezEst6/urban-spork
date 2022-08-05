//Los componentes siempre fuera de otros componenttes
import './App.css';
import Header from './Header';
import Part from './Part';

let ac = 0;

const Content = () => {
	ac += 10;
	ac += 7;
	ac += 14;
	return (
		<div>
			<Part number="10" name="Fundamentals of React" />
			<Part number="7" name="Using props to pass data" />
			<Part number="14" name="State of a component" />
		</div>
	);
};

const Total = () => {
	return <p>Number of exercises {ac}</p>;
};

function App() {
	return (
		<div className="App">
			<Header title="Half Stack application development" />
			<Content />
			<Total />
		</div>
	);
}

export default App;
