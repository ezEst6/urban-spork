//Los componentes siempre fuera de otros componenttes
import './App.css';
import Message from './Mensaje';

const Description = () => {
	return <p>Esta es la app del curso de fullstack bootcamp</p>;
};

function App() {
	return (
		<div className="App">
			<Message msg="Estamos reutilizando" />
			<Message msg="la misma funcion" />
			<Description />
		</div>
	);
}

export default App;
