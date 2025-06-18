function ListGroup() {
	let items = [
		'Sydney',
		'Perth',
		'Melbourne',
		'Canberra',
		'Brisbane'
	]


	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
			{items.map(item => <li key={item} className="list-group-item">{item}</li>)}
			</ul>
		</>
	);
}

export default ListGroup;
