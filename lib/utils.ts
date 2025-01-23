import { client } from "@/sanity/lib/client";
import { clsx, type ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function parseServerActionResponse<T>(response: T) {
	return JSON.parse(JSON.stringify(response));
}

export async function generateSlug(title: string) {
	// Generate the initial slug
	const baseSlug = slugify(title, { lower: true, strict: true });

	let uniqueSlug = baseSlug;
	let suffix = 1;

	// Query existing slugs in the dataset
	const existingSlugs = await client
		.withConfig({ useCdn: false })
		.fetch(
			`*[_type == "startup" && slug.current match "${baseSlug}*"].slug.current`
		);

	// While the slug exists in the database, append a numeric suffix
	if (existingSlugs) {
		while (existingSlugs.includes(uniqueSlug)) {
			uniqueSlug = `${baseSlug}-${suffix}`;
			suffix++;
		}
	}

	return uniqueSlug;
}
