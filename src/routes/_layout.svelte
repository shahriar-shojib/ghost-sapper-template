<script context="module">
	export async function preload() {
		const data = await this.fetch('/settings.json').then(res => res.json());
		return { settings: data };
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let settings;
	export let segment;

	const settings$ = writable(settings);
	settings$.subscribe(value => {
		setContext('settings', value);
	});
</script>

<Nav {segment} />

<main>
	<div>
		<slot />
	</div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div {
		padding: 5px;
		width: 50%;
		margin: 10px;
		line-height: 20px;
		color: white;
		text-align: center;
	}
</style>
