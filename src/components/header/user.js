import { TickIcon } from "../ui/icons";

export const HeaderUser = () => {
	return (
		<div className="flex items-center gap-2.5">
			<div className="pointer-events-none relative size-12.5 select-none">
				<img
					src="/assets/images/chatbot.png"
					alt="Chatbot"
					className="size-full overflow-hidden rounded-full bg-white"
				/>
				<span className="absolute bottom-0.5 right-0.5 size-2 rounded-full bg-green" />
			</div>
			<div className="flex flex-col">
				<div className="flex items-center gap-2.5">
					<span className="text-lg font-semibold text-blue">
						Timpu
					</span>
					<TickIcon className="size-4" />
				</div>
				<span className="font-medium text-blue">Chat Assistant</span>
			</div>
		</div>
	);
};
