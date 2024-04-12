import { cn } from "../../lib/utils";
import { ConfigurationIcon, XIcon } from "../ui/icons";

const Select = ({ selected, children }) => {
	return (
		<button
			className={cn(
				"inline-flex h-6 items-center justify-center gap-[5px] rounded-[5px] border-0 px-2.5 py-0.5 text-sm",
				selected && "border border-blue bg-[#F6F9FF] text-blue",
				!selected && "bg-[#F4F4F4] text-[#737373]",
			)}
		>
			<span>{children}</span>
			<XIcon className="size-3" />
		</button>
	);
};

export const ContentFilters = () => {
	return (
		<div className="flex w-full flex-col gap-2.5">
			<div className="flex w-full items-center justify-between">
				<p className="text-sm text-[#949494]">Select filters</p>
				<div className="flex items-center gap-1">
					<ConfigurationIcon className="size-5" />
					<span className="text-sm text-[#666666]">Filter</span>
				</div>
			</div>
			<div className="flex w-full flex-wrap items-start justify-start gap-2.5">
				<Select selected>Strap - Long</Select>
				<Select>Color</Select>
				<Select>Size</Select>
				<Select>Brand</Select>
				<Select>Material</Select>
			</div>
		</div>
	);
};
