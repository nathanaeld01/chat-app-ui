import { ChevronRightIcon } from "../ui/icons";

const Button = ({ children }) => {
	return (
		<button
			className="inline-flex h-7.5 items-center justify-center gap-2.5 whitespace-nowrap rounded-[5px] border border-blue bg-light-blue px-2.5 py-[5px] font-medium leading-none text-blue"
			type="button"
		>
			{children}
		</button>
	);
};

export const ContentTags = () => {
	return (
		<div className="w-full">
			<p className="mb-2.5 text-sm text-[#949494]">
				Popular tags for handbag
			</p>
			<div className="grid w-full grid-cols-[1fr_auto] gap-[5px]">
				<div className="flex w-full gap-2.5 overflow-hidden overflow-x-auto">
					<Button>Clutch</Button>
					<Button>Fabric lining</Button>
					<Button>Baggit</Button>
					<Button>Multi Compartment</Button>
				</div>
				<div className="flex h-full w-6">
					<ChevronRightIcon className="m-auto w-2.5 stroke-blue" />
				</div>
			</div>
		</div>
	);
};
