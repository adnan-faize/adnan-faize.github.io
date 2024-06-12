<script lang="ts">
	import NavigationItem from './interactable/NavigationItem.svelte';

	import { screen_size } from '$lib';

	import { fly } from 'svelte/transition';

	import sections from '$lib/data/sections.json';

	function getDate() {
		return new Date().toLocaleString('en', { month: 'long', day: 'numeric' });
	}

	function onScroll() {
		const x = document.documentElement.clientWidth / 2;
		const y = document.documentElement.clientHeight / 2;
		const id = document.elementFromPoint(x, y)?.closest('[data-app-section]')?.id;
		if (!id) return;
		document.querySelectorAll('[data-nav]').forEach((element) => {
			element.children[0].classList.remove('active');
			element.children[1].classList.remove('active');
		});
		const element = document.querySelector(`[data-nav=${id}]`);
		element?.children[0].classList.add('active');
		element?.children[1].classList.add('active');
	}
</script>

<svelte:window on:scroll={onScroll} />

{#if $screen_size > 1500}
	<aside class="today-date" transition:fly={{ x: -400, duration: 1500 }}>
		<div class="today-date__content">
			<p>{getDate()}</p>
		</div>
	</aside>
	<aside class="navigation" transition:fly={{ x: 400, duration: 1500 }}>
		<div class="navigation__content">
			<ul>
				{#each sections as section}
					<li data-nav={section.id}>
						<NavigationItem data={section} /><span class="icon">arrow_left</span>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
{/if}

<style>
	.today-date,
	.navigation {
		z-index: 1;
		position: absolute;
		top: 0;
		display: flex;
		align-items: end;
		height: 100%;
	}

	.today-date__content,
	.navigation__content {
		position: sticky;
	}

	.today-date {
		left: 0;
		width: 100px;
	}

	.today-date__content {
		font-family: 'Courier New', Courier, monospace;
		bottom: 4rem;
		width: 100%;
		margin: 2em 0;
		font-size: 1.5rem;
		text-transform: uppercase;
		mix-blend-mode: difference; /* FIXME */

		&::after {
			content: '';
			position: absolute;
			top: -2.5em;
			left: 50%;
			height: 2em;
			width: 1px;
			background-color: rgb(var(--foreground));
		}
	}

	.today-date__content p {
		transform: rotate(270deg);
	}

	.navigation {
		right: 0;
		width: 200px;
	}

	.navigation__content {
		display: flex;
		align-items: center;
		bottom: 50%;
		height: 0;
		width: 100%;
	}

	.navigation__content ul {
		font-family: 'Clash Display';
		font-weight: 500;
		list-style: none;
		line-height: 1.5em;
		font-size: 1.15rem;
	}

	.navigation__content ul li {
		margin: 0.5em 0;
		width: 100%;
		display: flex;
		justify-content: right;
		align-items: center;
	}

	.navigation__content ul li span {
		visibility: hidden;

		&.active {
			visibility: visible;
		}
	}
</style>
