import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);

	return (
		<div>
			{alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
			<Button
				className="primary"
				onClick={() => setAlertVisibility(true)}
			>Show Alert</Button>
			{/* <Button className="success" />
			<Button className="danger" />
			<Button className="warning" />
			<Button className="info" />
			<Button className="light" />
			<Button className="dark" />
			<Button className="link" /> */}
		</div>
	);
}

export default App;
