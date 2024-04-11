import { HeaderStatus } from "./status";
import { HeaderUser } from "./user";

export const Header = () => {
	return (
		<div className="flex h-20 w-full justify-between bg-ghost-white px-5 py-2.5">
			<HeaderUser />
			<HeaderStatus />
		</div>
	);
};
