import { cn } from "../../lib/utils";

const TickIcon = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-none", className)}
			viewBox="0 0 16 17"
			{...props}
		>
			<path
				fill="#FFED8C"
				d="M7.266 1.343a1.576 1.576 0 0 1 1.915-.037l.661.486c.27.198.598.306.933.306h.903c.692 0 1.303.45 1.507 1.111l.231.751c.1.321.298.602.568.802l.77.571c.563.418.783 1.157.539 1.815l-.266.715a1.577 1.577 0 0 0-.01 1.067l.307.885a1.576 1.576 0 0 1-.55 1.784l-.79.586c-.27.2-.469.481-.568.802l-.231.75a1.576 1.576 0 0 1-1.507 1.113h-.903c-.335 0-.662.107-.933.306l-.733.538a1.576 1.576 0 0 1-1.821.032l-.884-.602a1.577 1.577 0 0 0-.888-.274h-.812a1.576 1.576 0 0 1-1.492-1.067l-.287-.84c-.1-.294-.284-.55-.53-.74l-.78-.6a1.576 1.576 0 0 1-.527-1.768l.315-.905c.12-.346.116-.723-.011-1.067l-.274-.736a1.576 1.576 0 0 1 .516-1.798l.761-.585c.245-.19.43-.446.53-.74l.287-.84a1.576 1.576 0 0 1 1.492-1.067h1.063c.357 0 .703-.12.982-.342l.517-.412Z"
			/>
			<path fill="#F2CF18" d="m12.237 7.843-3.152 3.152-.63-.63" />
			<path
				stroke="#F2CF18"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.04 8.474 6 10c.362.366.52.397.893.043l4.785-4.47m.56 2.27-3.153 3.152-.63-.63m5.529 1.82.79-.586c.554-.41.777-1.133.55-1.784l-.308-.885a1.576 1.576 0 0 1 .011-1.067l.266-.715a1.576 1.576 0 0 0-.54-1.815l-.77-.571c-.269-.2-.468-.48-.567-.802l-.231-.75a1.576 1.576 0 0 0-1.507-1.112h-.903c-.335 0-.662-.108-.933-.306l-.661-.486a1.576 1.576 0 0 0-1.915.037l-.517.412a1.576 1.576 0 0 1-.982.343H4.704c-.674 0-1.274.428-1.492 1.066l-.287.84c-.1.294-.284.55-.53.74l-.76.585a1.576 1.576 0 0 0-.517 1.798l.274.736c.127.344.131.721.01 1.067l-.314.905a1.576 1.576 0 0 0 .527 1.767l.78.601c.245.19.43.446.53.74l.287.84a1.576 1.576 0 0 0 1.492 1.067h.812c.317 0 .627.095.888.274l.884.602a1.576 1.576 0 0 0 1.82-.032l.734-.539a1.58 1.58 0 0 1 .933-.305h.903c.692 0 1.303-.451 1.507-1.112l.231-.751c.1-.321.298-.602.568-.802Z"
			/>
		</svg>
	);
};

const PaperclipIcon = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-none", className)}
			viewBox="0 0 19 20"
			{...props}
		>
			<path
				stroke="#949494"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.142-7.142A3.338 3.338 0 0 1 15 7.367l-7.158 7.141a1.668 1.668 0 0 1-2.359-2.358l7.075-7.067"
			/>
		</svg>
	);
};

const ChevronRightIcon = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-none stroke-white", className)}
			viewBox="0 0 12 18"
			{...props}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M2.25 16.5 9.75 9l-7.5-7.5"
			/>
		</svg>
	);
};

const ConfigurationIcon = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-none stroke-[#666666]", className)}
			viewBox="0 0 21 20"
			{...props}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M18 3.333h-5.833m-3.334 0H3M18 10h-7.5m-3.333 0H3m15 6.667h-4.167m-3.333 0H3m9.167-15V5m-5 3.333v3.334M13.833 15v3.333"
			/>
		</svg>
	);
};

const XIcon = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn("fill-none stroke-[#737373]", className)}
			viewBox="0 0 11 12"
			{...props}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="m1.353 9.913 7.756-7.756m-7.756 0 7.756 7.756"
			/>
		</svg>
	);
};

export { ChevronRightIcon, ConfigurationIcon, PaperclipIcon, TickIcon, XIcon };
