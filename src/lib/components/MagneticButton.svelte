<script lang="ts">
	import { mouse_pos } from '$lib';

	import { onMount } from 'svelte';

	export let link;
	export let tooltip;
	export let img_src;
	export let add_style;

	let button: HTMLElement;
	let style = '';
	let inner_style = '';

	let prev_x = 0;
	let prev_y = 0;

	const distance = 1.2;
	const amount = 0.15;

	const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

	onMount(render);

	function render() {
		button;
		const rect = button.getBoundingClientRect();
		const x = window.scrollX + rect.left + rect.width / 2;
		const y = window.scrollY + rect.top + rect.height / 2;
		const current_distance = Math.hypot($mouse_pos.x - x, $mouse_pos.y - y);

		if (current_distance < rect.width * distance) {
			prev_x = lerp(prev_x, ($mouse_pos.x - x) * 0.3, amount);
			prev_y = lerp(prev_y, ($mouse_pos.y - y) * 0.3, amount);
		} else {
			prev_x = lerp(prev_x, 0, amount);
			prev_y = lerp(prev_y, 0, amount);
		}

		style = `transform: translateX(${prev_x}px) translateY(${prev_y}px);`;
		inner_style = `transform: translateX(${prev_x * 0.6}px) translateY(${prev_y * 0.6}px);`;

		requestAnimationFrame(render);
	}
</script>

<button {style} bind:this={button} on:click={(_) => window.open(link)} data-cursor-pointer>
	<img src={img_src} style={`${inner_style} ${add_style}`} alt="" />
	<span>{tooltip}</span>
</button>

<style>
	button {
		margin: 0 1.5rem;
		padding: 1rem 2rem;
		position: relative;
		background: transparent;
		border: 1px solid rgb(var(--c-foreground));
		border-radius: 0.5rem;
	}

	img {
		width: 2.25rem;
		height: 2.25rem;
	}

	span {
		visibility: hidden;
		z-index: 1;
		margin-left: -60px;
		padding: 5px 0;
		position: absolute;
		bottom: 125%;
		left: 50%;
		width: 120px;
		font-family: 'Clash Display';
		font-weight: 500;
		font-size: 14px;
		text-align: center;
		color: rgb(var(--c-background));
		background-color: rgb(var(--c-foreground));
		border: 1px solid rgb(var(--c-foreground));
		border-radius: 6px;
		opacity: 0;
		transition: opacity 500ms 500ms;

		&::after {
			content: '';
			margin-left: -5px;
			position: absolute;
			top: 100%;
			left: 50%;
			border-width: 5px;
			border-style: solid;
			border-color: rgb(var(--c-foreground)) transparent transparent transparent;
		}
	}

	button:hover span {
		visibility: visible;
		opacity: 1;
	}
</style>
