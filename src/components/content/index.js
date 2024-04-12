import { ContentFilters } from "./filters";
import { ContentItem } from "./item";
import { ContentProduct } from "./product";
import { ContentTags } from "./tags";

export const Content = () => {
	return (
		<div className="flex h-full w-full flex-col justify-end gap-5 p-2.5 pb-7.5">
			<ContentItem type="receiver" time="4:45 PM">
				Hi Sam! I am your personal shopping assistant , how can i help
				you today ?
			</ContentItem>
			<ContentItem type="sender" time="4:46 PM">
				I am looking for a hand bag, with long strap .
			</ContentItem>
			<ContentTags />
			<ContentItem className="px-2.5" type="receiver" time="4:48 PM">
				<ContentProduct image="/assets/images/product.png" />
				<span>
					Or set filter and help us choose the best bag for you.
				</span>
			</ContentItem>
			<ContentFilters />
		</div>
	);
};
