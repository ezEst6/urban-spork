// desestructuracion: Hello recibe los datos y los asigna a las variables name y age, en la primera linea de la funcion
const Hello = ({ name, age }) => {
	const bornYear = () => new Date().getFullYear() - age;

	return (
		<div>
			<p>
				Hello {name}, you are {age} years old.
			</p>
			<p>So you were probably born in {bornYear()}</p>
		</div>
	);
};

export default Hello;
