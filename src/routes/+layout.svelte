<script lang="ts">
	import '$lib/fonts/clash-display.css';

	import Cursor from './components/layout/Cursor.svelte';
	import Header from './components/layout/Header.svelte';
	import Background from './components/layout/Background.svelte';
	import UI from './components/layout/UI.svelte';
	import Footer from './components/layout/Footer.svelte';

	import { mouse_position, screen_size } from '$lib';

	let innerWidth: number;

	$: screen_size.set(innerWidth);

	const setMousePosition = (e: MouseEvent) => mouse_position.set({ x: e.pageX, y: e.pageY });
</script>

<svelte:window bind:innerWidth on:mousemove={setMousePosition} />

<svelte:head>
	<title>NANDEEE · Adnan Faize</title>
	<meta name="description" content="NANDEEE · Adnan Faize - Static Website" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
</svelte:head>

<Cursor />
<Header />
<Background />
<main>
	<slot />
	<UI />
</main>
<Footer />

<style>
	:global(:root) {
		--foreground: 245, 243, 255;
		--background: 15, 23, 42;
		--background-gradient: 12, 4, 26;
		--interaction: 139, 92, 246;
	}

	:global(body) {
		margin: 0;
		overflow-x: hidden;
		color: rgb(var(--foreground));
		background: linear-gradient(to bottom, transparent, rgb(var(--background-gradient)))
			rgb(var(--background));
	}

	:global(.nav-item) {
		position: relative;
		display: inline-block;
		text-transform: capitalize;
		text-decoration: none;
		-webkit-text-fill-color: transparent;
		background: linear-gradient(to right, rgb(var(--interaction)) 50%, rgb(var(--foreground)) 50%);
		background-size: 200% 100%;
		background-position: -100%;
		background-clip: text;
		transition: all 500ms ease-out;

		&::before {
			content: '';
			position: absolute;
			bottom: -3px;
			left: 0;
			width: 0;
			height: 1px;
			background-color: rgb(var(--interaction));
			transition: all 500ms ease-out;
		}
		&:hover,
		&.active {
			background-position: 0;

			&::before {
				width: 100%;
			}
		}
	}

	main {
		position: relative;
		margin-top: 20vh;
	}
</style>
