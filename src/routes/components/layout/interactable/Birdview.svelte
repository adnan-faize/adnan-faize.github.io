<script lang="ts">
	import TextAnimation from '../../TextAnimation.svelte';

	export let video;

	let contentRect: DOMRect;
	let style = '';
	let birdview_active = true;

	function birdviewEffect(e: MouseEvent) {
		if (!birdview_active || !contentRect) return;
		const x = (e.clientX - contentRect.left - Math.floor(contentRect.width / 2)) / 6;
		const y = (e.clientY - contentRect.top - Math.floor(contentRect.height / 2)) / 6;
		style = `transform: translateX(${x}px) translateY(${y}px) scale(1.2);`;
	}

	function toggleBirdview(e: MouseEvent) {
		birdview_active = !birdview_active;
		birdview_active
			? birdviewEffect(e)
			: (style = `transform: translateX(0) translateY(0) scale(1);`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="birdview" bind:contentRect on:mousemove={birdviewEffect} on:click={toggleBirdview}>
	<video class="birdview__video" {style} autoplay muted loop>
		<source src={video} type="video/mp4" />
	</video>
	<article class="birdview__text">
		<TextAnimation>
			<slot />
		</TextAnimation>
	</article>
</section>

<style>
	.birdview {
		position: relative;
		width: 100%;
		height: calc(100% * 7 / 8);
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(at center top, transparent 60%, rgb(var(--background)) 100%);
		}
	}

	.birdview__video {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		background-color: rgb(var(--background));
		filter: brightness(0.8);
		transition: transform 500ms ease-out;
	}

	.birdview__text {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		&::before {
			content: '';
			opacity: 0.25;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url('$lib/images/grid.png') top left repeat;
		}
	}
</style>
