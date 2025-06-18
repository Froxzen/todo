import type { MouseEvent } from "react";

function ListGroup() {
	let items = ["Sydney", "Perth", "Melbourne", "Canberra", "Brisbane"];

	// Event Handler
	const handleClick = (event: MouseEvent) => console.log(event);

	return (
		<>
			<h1>List</h1>

			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={item}
						className="list-group-item"
						onClick={handleClick}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
