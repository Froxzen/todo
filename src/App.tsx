import ListGroup from "./components/ListGroup";

function App() {
let items = ["Sydney", "Perth", "Melbourne", "Canberra", "Brisbane"];

	return (
		<div>
			<ListGroup items={items} heading={"Citites"} />
		</div>
	);
}

export default App;
