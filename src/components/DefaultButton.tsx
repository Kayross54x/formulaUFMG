import React from "react";

export default function DefaultButton(props: { text?: string; onClick?: () => void, disableAnimation?: boolean, children?: React.ReactNode }) {
	const animation = props.disableAnimation ? "" : "before:absolute before:inset-0 before:bg-[linear-gradient(270deg,#0D00FF,#1A00FF,#0066FF,#0D00FF)] before:bg-[length:300%_300%] before:animate-liquid hover:before:opacity-100 before:opacity-70";
	return (
		<button
			onClick={props.onClick}
			className={`relative overflow-hidden px-5 text-center py-2 -skew-x-12 text-white text-md font-bold transition-all duration-300 bg-[#0D00FF] ${animation}`}
		>
			<p className="skew-x-12 relative z-10">{props?.text}</p>
			{props.children}
		</button>
	);
}
