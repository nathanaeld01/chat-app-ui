import { PaperclipIcon } from "../ui/icons";

export const FooterInput = () => {
	return (
		<div className="relative grow">
			<input
				className="input-border flex h-10 w-full rounded-[10px] bg-white pl-5 pr-8 text-sm focus-visible:outline-none"
				type="text"
				placeholder="Type your message"
			/>
			<PaperclipIcon className="z-1 absolute inset-y-0 right-2 my-auto size-4" />
		</div>
	);
};
