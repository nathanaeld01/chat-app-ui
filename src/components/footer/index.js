import { FooterButton } from "./button";
import { FooterInput } from "./input";

export const Footer = () => {
	return (
		<div className="flex h-20 w-full flex-col gap-2.5 bg-footer px-2.5 py-[5px]">
			<div className="flex gap-[5px]">
				<FooterInput />
				<FooterButton />
			</div>
			<div className="mx-auto flex items-center gap-2.5">
				<span className="text-sm">
					<span className="text-gray">Powered by </span>{" "}
					<span className="text-dark-gray font-semibold">
						Krunk.ai
					</span>
				</span>
				<img
					src="/assets/images/logo.png"
					alt="Logo"
					className="size-4.5 object-contain"
				/>
			</div>
		</div>
	);
};
