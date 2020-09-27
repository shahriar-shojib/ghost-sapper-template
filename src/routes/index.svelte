<script context="module">
	export async function preload() {
		const data = await this.fetch('/index.json').then(res => res.json());
		return { posts: data };
	}
</script>

<script>
	import { getContext } from 'svelte';
	let settings = getContext('settings');
	export let posts;
</script>

<svelte:head>
	<title>{settings.title}</title>
	<link rel="icon" href={settings.icon} />
</svelte:head>
<section>
	<img src={settings.logo} alt="" />
	<h1>{settings.description}</h1>
	{#each posts as post}
		<div>
			<img src={post.feature_image} alt="" />
			<a href={post.slug}><h2>{post.title}</h2></a>
			<p>{post.excerpt}</p>
		</div>
	{/each}
</section>

<style>
	img {
		width: 100px;
	}
	div {
		background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
		color: #fff;
		border-radius: 10px;
		box-shadow: 7px 10px 13px 1px rgb(196 161 219 / 33%);
		padding: 20px;
		margin-bottom: 20px;
	}
	section {
		background: #000;
	}
</style>
