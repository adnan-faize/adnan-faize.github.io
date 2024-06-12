<script lang="ts">
	import Birdview from './interactable/Birdview.svelte';
	import NavigationItem from './interactable/NavigationItem.svelte';
	import LinkItem from './interactable/LinkItem.svelte';

	import placeholder_video from '$lib/videos/placeholder.mp4';
	import sections from '$lib/data/sections.json';
	import links from '$lib/data/links.json';

	import { screen_size } from '$lib';
</script>

<header>
	<Birdview video={placeholder_video}>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sunt, veritatis quidem assumenda
		velit animi accusamus totam laboriosam nam quam! Quae numquam commodi autem illum minima et
		incidunt in qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis
		dolore laboriosam labore ea dolores, magnam deleniti perspiciatis ipsa assumenda ipsam
		perferendis, sunt totam non optio qui sint veniam. Deserunt. Lorem ipsum dolor, sit amet
		consectetur adipisicing elit. Molestiae quam nulla ducimus, culpa itaque sunt! Quis provident,
		dignissimos facere in similique dolore neque sequi, facilis illum excepturi eum nihil quae!
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat voluptates doloribus a
		illum perferendis suscipit atque dolorum eius dicta! Architecto quas, totam laborum accusamus
		placeat porro beatae soluta ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Laborum odit porro ex sint animi eum qui error assumenda mollitia vel molestias, soluta, iusto
		dolore sapiente ut, veritatis non earum! Voluptatum?
	</Birdview>
	<section>
		<article class="title">
			<h1 class="title__main">NANDEEE</h1>
			<h1 class="title__sub">Adnan Faize</h1>
		</article>
		{#if $screen_size > 1400}
		<article>
			<nav class="sections">
				<ul>
					{#each sections as section}
						<li><NavigationItem data={section} /></li>
					{/each}
				</ul>
			</nav>
			<nav class="links">
				<ul>
					{#each links as link}
						<li><LinkItem data={link} /></li>
					{/each}
				</ul>
			</nav>
		</article>
		{/if}
	</section>
</header>

<style>
	header {
		font-family: 'Clash Display';
		width: 100vw;
		height: 100dvh;
	}

	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 4rem;
		height: calc(100% * 1 / 8);
	}

	.title {
		z-index: 1;
		text-transform: uppercase;
	}

	.title__main {
		margin-top: 0;
		font-size: 8rem;
		opacity: 0.95;
	}

	.title__sub {
		margin-top: -10.5rem;
		margin-left: 12rem;
		font-size: 5rem;
		white-space: nowrap;
		opacity: 0.2;
	}

	.sections ul,
	.links ul {
		padding: 0.125rem;
		display: flex;
		justify-content: right;
		list-style: none;
		font-size: 20px;
		font-weight: 500;
		text-transform: capitalize;
		opacity: 0.9;
	}

	.sections li + li {
		margin-left: 1.5rem;
	}

	.links li + li::before {
		content: '/';
		margin: 0 1rem;
		opacity: 0.4;
	}
</style>
