import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const View = async ({ id }: { id: string }) => {
	const { views: totalViews } = (await client
		.withConfig({ useCdn: false })
		.fetch(STARTUP_VIEWS_QUERY, { id })) as { _id: string; views: number };

	// Executes after the full page loads
	after(async () => {
		await writeClient
			.patch(id)
			.set({ views: totalViews + 1 })
			.commit();
	});

	return (
		<div className="view-container">
			<div className="absolute -top-2 -right-2">
				<Ping />
			</div>

			<p className="view-text">
				<span className="font-black">
					{totalViews == 1 ? `${totalViews} view` : `${totalViews} views`}
				</span>
			</p>
		</div>
	);
};

export default View;
