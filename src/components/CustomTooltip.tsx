interface ICustomTooltip {
	position: "top" | "bottom" | "left" | "right";
	content: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
}

export default function CustomTooltip(props: ICustomTooltip) {
	const { children, content, position } = props;

	return (
		<div className='relative cursor-pointer group'>
			<div className='mx-2 my-1'>{children}</div>
			<span className={`absolute opacity-0 group-hover:opacity-100 bg-neutral-900 dark:bg-white dark:text-black transition-opacity duration-300 text-white text-xs p-2 whitespace-nowrap rounded
				${position === "top" ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]" : ""}
				${position === "bottom" ? "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]" : ""}
				${position === "left" ? "top-1/2 -translate-y-1/2 right-[calc(100%+5px)]" : ""}
				${position === "right" ? "top-1/2 -translate-y-1/2 left-[calc(100%+5px)]" : ""}
			`}>{content}</span>

			<span className={`absolute opacity-0 group-hover:opacity-100 border-[6px] transition-opacity duration-300
				${position === "top" ? "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-neutral-900 dark:border-t-white" : ""}
				${position === "bottom" ? "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-neutral-900 dark:border-b-white" : ""}
				${position === "left" ? "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-neutral-900 dark:border-l-white" : ""}
				${position === "right" ? "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-neutral-900 dark:border-r-white" : ""}
			`}></span>
		</div>
	)
}
