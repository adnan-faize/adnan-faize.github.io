<script lang="ts">
	import { onMount } from 'svelte';

	let background: HTMLElement;

	onMount(() => {
		const y_min = (document.documentElement.clientHeight * 7) / 8;
		const y_max = document.documentElement.offsetHeight;

		const x = document.documentElement.offsetWidth;
		const y = (y_max - y_min) + y_min;

		const multipleBoxShadows = (n: number) => {
			let value = `${Math.random() * x}px ${Math.random() * y}px #fff`;

			for (let i = 2; i < n; i++) {
				value = `${value}, ${Math.random() * x}px ${Math.random() * y}px #fff`;
			}

			return value;
		};

		background.style.setProperty('--from-val', `-${y_min}px`);
		background.style.setProperty('--to-val', `-${y_max}px`);

		background.style.setProperty('--shadows-small', multipleBoxShadows(700));
		background.style.setProperty('--shadows-medium', multipleBoxShadows(200));
		background.style.setProperty('--shadows-big', multipleBoxShadows(100));
	});
</script>

<div class="background" bind:this={background}>
	<div class="stars"></div>
	<div class="stars2"></div>
	<div class="stars3"></div>
</div>

<style>
	.background {
		--from-val: 0px;
		--to-val: -2000px;

		--shadows-small: 0;
		--shadows-medium: 0;
		--shadows-big: 0;
		
		offset: none;
	}

	.stars {
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: var(--shadows-small);
		animation: animStar 50s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: calc(var(--to-val) * -1);
			width: 1px;
			height: 1px;
			background: transparent;
			box-shadow: var(--shadows-small);
		}
	}

	.stars2 {
		width: 2px;
		height: 2px;
		background: transparent;
		box-shadow: var(--shadows-medium);
		animation: animStar 100s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: calc(var(--to-val) * -1);
			width: 2px;
			height: 2px;
			background: transparent;
			box-shadow: var(--shadows-medium);
		}
	}

	.stars3 {
		width: 3px;
		height: 3px;
		background: transparent;
		box-shadow: var(--shadows-big);
		animation: animStar 150s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: calc(var(--to-val) * -1);
			width: 3px;
			height: 3px;
			background: transparent;
			box-shadow: var(--shadows-big);
		}
	}

	@keyframes animStar {
		from {
			transform: translateY(var(--from-val));
		}
		to {
			transform: translateY(var(--to-val));
		}
	}
</style>
