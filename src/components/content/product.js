import { ChevronRightIcon, TickIcon } from "../ui/icons";

export const ContentProduct = ({ image }) => {
	return (
		<div className="flex items-center gap-2.5 rounded-[10px] bg-white p-2.5">
			<img
				src={image}
				alt="Product"
				className="h-[50px] w-[70px] rounded-[5px] object-cover"
			/>
			<div className="flex w-full flex-col gap-2">
				<div className="flex items-center gap-[5px]">
					<span className="text-sm font-medium">
						Bags on <span className="font-semibold">Timpu</span>
					</span>
					<TickIcon className="size-3.5" />
				</div>
				<div className="flex items-center justify-between">
					<span className="text-xs text-[#949494]">
						1123 products
					</span>
					<ChevronRightIcon className="w-2 stroke-[#949494]" />
				</div>
			</div>
		</div>
	);
};
