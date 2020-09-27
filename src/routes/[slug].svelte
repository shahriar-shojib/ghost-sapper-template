<script context="module">
	export async function preload(page) {
		const { slug } = page.params;
		const res = await this.fetch(`/${slug}.json`);
		if (res.status === 200) return { article: await res.json() };
		this.error(404, 'Not found');
	}
</script>

<script>
	import { getContext } from 'svelte';
	export let article;
	const {
		title,
		html: content,
		feature_image,
		published_at,
		reading_time,
	} = article;
	let { title: site_title } = getContext('settings');
</script>

<svelte:head>
	<title>{title} | {site_title}</title>
</svelte:head>

<article>
	<div>
		<h1>{title}</h1>
		<img src={feature_image} alt="" />
		<p>Published at: {new Date(published_at).toLocaleDateString()}</p>
		<p>Reading Time {reading_time}</p>
	</div>
	<div class="content">
		{@html content}
	</div>
</article>

<style>
	article {
		width: 90%;
	}
	p,
	div {
		text-align: left;
		font-size: 1rem;
	}
	.content {
		width: 90%;
		white-space: normal;
		margin: 0;
	}
	img {
		width: 70%;
	}
</style>
