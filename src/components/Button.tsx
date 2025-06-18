import type { ReactNode } from "react";

interface Props {
	className: "primary" | "secondary";
	children: ReactNode;
	onClick: () => void;
}

export const Button = ({className,onClick, children}: Props) => {
	const type = `btn btn-${className}`;

	return (
		<>
			<button type="button" className={type} onClick={onClick}>
				{children}
			</button>
		</>
	);
};
