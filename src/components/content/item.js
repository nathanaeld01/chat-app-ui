import { cn } from "../../lib/utils";

export const ContentItem = ({ type, time, className, children }) => {
	const isSender = type === "sender";
	const isReceiver = type === "receiver";

	return (
		<div
			className={cn(
				"flex w-full flex-col gap-1",
				isSender && "items-end",
				isReceiver && "items-start",
			)}
		>
			<div
				className={cn(
					"flex min-h-2.5 max-w-62.5 flex-col gap-2.5 text-wrap rounded-2xl px-4 py-2.5 text-sm text-charcoal",
					isSender && "bg-light-green",
					isReceiver && "bg-footer",
					className,
				)}
			>
				{children}
			</div>
			<span className="px-2.5 text-[10px] text-charcoal">{time}</span>
		</div>
	);
};
