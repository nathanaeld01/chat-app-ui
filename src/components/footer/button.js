import { ChevronRightIcon } from "../ui/icons";

export const FooterButton = ({ ...props }) => {
	return (
		<button
			className="inline-flex h-10 w-[70px] items-center justify-center gap-2.5 rounded-[10px] border-0 bg-blue py-2"
			{...props}
		>
			<ChevronRightIcon className="w-2" />
		</button>
	);
};
