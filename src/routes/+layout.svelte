<script lang="ts" context="module">
	function scrollTo(e: MouseEvent, dir: string) {
		e.preventDefault();
		document.querySelector(dir)?.scrollIntoView({ behavior: 'smooth' });
	}

	export { scrollTo };
</script>

<script lang="ts">
	import '$lib/fonts/clash-display.css';
	import '$lib/icons/material-icons/material-icons.css';

	import Cursor from './layout/Cursor.svelte';
	import Header, { sections } from './layout/Header.svelte';
	import Background from './layout/Background.svelte';
	import Foreground from './layout/Foreground.svelte';
	import Footer from './layout/Footer.svelte';

	import { mouse_pos } from '$lib';

	const setMousePos = (e: MouseEvent) => mouse_pos.set({ x: e.pageX, y: e.pageY });

	let active_section: string | null | undefined = null;

	function onScroll() {
		const x = document.documentElement.clientWidth / 2;
		const y = document.documentElement.clientHeight / 2;
		active_section = document.elementFromPoint(x, y)?.closest('section')?.id;
	}
</script>

<svelte:window on:scroll={onScroll} on:mousemove={setMousePos} />

<svelte:head>
	<title>NANDEEE_ · Adnan Faize</title>
</svelte:head>

<Cursor />
<Header />
<Background />
<main>
	<aside>
		<div class="today">
			<p>{new Date().toLocaleString('en', { month: 'long', day: 'numeric' })}</p>
		</div>
	</aside>
	<div class="pages">
		<slot />
	</div>
	<aside>
		<nav class="navigation">
			<ul>
				{#each sections as section}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-missing-attribute -->
					 <!--FIXME : element does not appear as active, but does hover and the comp works-->
					<a
						class="nav-item"
						class:active={section.dir === ('#' + active_section)} 
						on:click={(e) => scrollTo(e, section.dir)}
						data-cursor-pointer
					>
						{section.text}
					</a>
				{/each}
			</ul>
		</nav>
	</aside>
</main>
<Foreground />
<Footer />

<style>
	:global(:root) {
		--c-foreground: 245, 243, 255;
		--c-foreground-1: 216, 210, 192;
		--c-foreground-2: 140, 138, 127;
		--c-foreground-3: 88, 89, 85;

		--c-emphasis: 189, 84, 191;

		--c-background: 12, 4, 28;
		--c-background-1: 15, 23, 42;
		--c-background-2: 28, 34, 38;
	}

	:global(body) {
		margin: 0;
		overflow-x: hidden;
		background-color: rgb(var(--c-background));
		color: rgb(var(--c-foreground));
	}

	main {
		margin: 8rem 0;
		display: flex;
		justify-content: space-between;
	}

	.pages {
		width: 1400px;
	}

	aside {
		display: flex;
		align-items: end;
		height: 100%;
	}

	.today {
		position: sticky;
		top: 0;
		height: 100%;
	}

	.nav-item {
		position: relative;
		display: inline-block;
		text-transform: capitalize;
		text-decoration: none;
		-webkit-text-fill-color: transparent;
		background: linear-gradient(to right, rgb(var(--c-emphasis)) 50%, rgb(var(--c-foreground)) 50%);
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
			background-color: rgb(var(--c-emphasis));
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
</style>
