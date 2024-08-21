<script lang="ts" context="module">
	interface SliderPageInterface {
		title: string;
		background_path: string;
		background_text: string;
		icon_path: string | null;
		headline: string;
		description: Array<string>;
		buttons: Array<any>; // TODO
		side_first_line: string;
		side_second_line: string;
	}

	const slides: SliderPageInterface[] = [
		{
			title: 'Yume no Kishi',
			background_path: 'https://i.postimg.cc/Qx34VNXM/slide1.jpg',
			background_text: 'Yume no Kishi',
			icon_path: '/src/lib/images/1.png',
			headline: 'Yume no Kishi',
			description: [
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime dignissimos ipsa commodi exercitationem! Esse autem vel, corrupti, tempora ad repellat assumenda, unde illum pariatur earum doloremque magni sint cumque!',
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sint eveniet quibusdam! Adipisci hic veniam possimus tenetur vitae atque, saepe quos in qui maxime, minus iure officiis amet, quod ad?'
			],
			buttons: [],
			side_first_line: 'Yume no Kishi',
			side_second_line: '夢の騎士'
		},
		{
			title: 'Tsumi no Owari',
			background_path: 'https://i.postimg.cc/t4RBtrnQ/slide2.jpg',
			background_text: 'Tsumi no Owari',
			icon_path: null,
			headline: 'Tsumi no Owari',
			description: [''],
			buttons: [],
			side_first_line: 'Tsumi no Owari',
			side_second_line: '罪の終わり'
		}
	];

	interface NavigationItemInterface {
		text: string;
		dir: string;
	}

	const sections: NavigationItemInterface[] = [
		{
			text: 'introduction',
			dir: '#introduction'
		},
		{
			text: 'about',
			dir: '#about'
		},
		{
			text: 'projects',
			dir: '#projects'
		},
		{
			text: 'shop',
			dir: '#shop'
		},
		{
			text: 'contact',
			dir: '#contact'
		}
	];

	const links: NavigationItemInterface[] = [
		{
			text: 'Youtube',
			dir: 'https://www.youtube.com/channel/UCgCvO-7Wt0wJzmKxfFU7ahg'
		},
		{
			text: 'Twitter',
			dir: 'https://twitter.com/adnan_faize'
		},
		{
			text: 'Github',
			dir: 'https://github.com/adnan-faize'
		}
	];

	export { sections };
</script>

<script lang="ts">
	import { scrollTo } from '../+layout.svelte';

	let current_slide: number = 0;
	let is_previous: boolean = false;
	let is_first_load: boolean = true;

	function changeSlide(index: number) {
		is_previous = index < current_slide;
		current_slide = index;
		is_first_load = false;
	}

	const getHeadline = (slide: SliderPageInterface): Array<string> => slide.headline.split(' ');
</script>

<header>
	<section class="slider">
		<div class="slides" class:is-previous={is_previous} class:first-load={is_first_load}>
			{#each slides as slide, index}
				<article
					class="slide"
					class:active={index === current_slide}
					style="	background-image: url('{slide.background_path}');
							z-index: {slides.length - index};"
				>
					<div class="slide__inner">
						<div class="slide__bg-text">
							<p>{slide.headline}</p>
						</div>
						<div class="slide__content">
							<div class="slide__header">
								{#if slide.icon_path}
									<img class="slide__icon" src={slide.icon_path} alt="" />
								{/if}
								<h1 class="slide__headline">
									{#each getHeadline(slide) as word}
										<p>{word}</p>
									{/each}
								</h1>
								<a href="#temp" class="slide__btn" data-cursor-pointer>
									<span class="slide__btn-text">
										<span>Know More</span>
									</span>
								</a>
							</div>
							<div class="slide__text">
								{#each slide.description as line}
									<p class="slide__description">{line}</p>
								{/each}
								<div class="slide__other-btns">
									{#each slide.buttons as button}
										<svelte:component this={button} />
									{/each}
								</div>
							</div>
						</div>
						<h2 class="slide__side-text">
							<span>{slide.side_first_line} / </span>
							<span>{slide.side_second_line}</span>
						</h2>
					</div>
				</article>
			{/each}
			<nav class="controls-container" style="z-index: {slides.length + 1};">
				{#each slides as control, index}
					<button
						class="control-button"
						class:active={index === current_slide}
						on:click={() => changeSlide(index)}
						data-cursor-pointer
					>
						{control.title}
					</button>
				{/each}
			</nav>
			<nav class="pagination-container" style="z-index: {slides.length + 1};">
				{#each slides as _, index}
					<button
						class="pagination-item"
						class:active={index === current_slide}
						on:click={() => changeSlide(index)}
						data-cursor-pointer
					/>
				{/each}
			</nav>
		</div>
	</section>
	<section class="navigation">
		<article class="title" style="z-index: {slides.length + 1};">
			<h1 class="title__main">NANDEEE</h1>
			<h1 class="title__sub">Adnan Faize</h1>
		</article>
		<article>
			<nav>
				<ul class="sections">
					{#each sections as section}
						<li>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<a class="nav-item" on:click={(e) => scrollTo(e, section.dir)} data-cursor-pointer>
								{section.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<nav>
				<ul class="links">
					{#each links as link}
						<li>
							<a class="nav-item" href={link.dir} target="_blank" data-cursor-pointer>
								{link.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</article>
	</section>
</header>

<style>
	header {
		font-family: 'Clash Display';
		width: 100vw;
		height: 100dvh;
	}

	/* ---------- START Slider Section ---------- */

	.slider {
		position: relative;
		height: calc(100% * 7 / 8);
		border-bottom: 5px solid #3b3e45;
	}

	.slide {
		background-size: cover;
		height: 100%;
		background-position: center center;
		position: absolute;
		width: 100%;
		background-blend-mode: darken;
		background-color: rgba(144, 171, 184);

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(144, 171, 184, 0.3);
		}
	}

	.slide__inner {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.slide__bg-text {
		color: black;
		font-size: 32vh;
		line-height: 0.8;
		opacity: 0.03;
		font-weight: 900;
		position: absolute;
		text-transform: uppercase;
		top: 1.2em;
		left: -0.4em;
		transform: translateY(-50%);

		& > p:last-child {
			padding-left: 4rem;
		}
	}

	.slide__content {
		color: rgb(var(--c-foreground));
		margin-top: 5rem;
		position: absolute;
		top: 40%;
		left: 10vw;
		width: 80%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: row;
	}

	.slide__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.slide__icon {
		width: 10rem;
		height: 10rem;
		padding: 2rem;
		border-radius: 25%;
	}

	.slide__btn {
		margin: 3rem 4rem;
		margin-left: calc(3rem + 2.3em);
		position: relative;
		color: #fff;
		text-transform: uppercase;
		display: inline-block;
		vertical-align: middle;
		width: 200px;
		padding: 0;
		background: transparent;
		border: 0;
		text-decoration: none;
		text-align: center;
		transition: all 0.4s ease-in-out;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: -2.4em;
			height: 1px;
			width: 3em;
			background-color: #fff;
			transition: all 0.25s ease;
		}

		&::after {
			content: '';
			top: 0;
			right: 0;
			height: 1px;
			width: 100%;
			background-color: #fff;
		}
	}

	.slide__btn-text {
		position: relative;
		display: block;
		padding: 0.7555em 2.29em;
		line-height: 1.5;
		transition: transform 0.5s ease;

		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 1px;
			width: 0;
			background-color: #fff;
		}

		&::before {
			top: 0;
			left: 0;
			transition: width 0.15s 0.45s cubic-bezier(0.77, 0, 0.175, 1);
		}

		&::after {
			bottom: 0;
			right: 0;
			transition: width 0.15s 0.15s cubic-bezier(0.77, 0, 0.175, 1);
		}

		& > span {
			&::before,
			&::after {
				content: '';
				position: absolute;
				height: 0;
				width: 1px;
				background-color: #fff;
				transition: all 0.2s cubic-bezier(0.2, 0.3, 0.25, 0.9);
			}

			&::before {
				left: 0;
				bottom: 0;
				transition: height 0.15s 0 cubic-bezier(0.77, 0, 0.175, 1);
			}

			&::after {
				right: 0;
				top: 0;
				transition: height 0.15s 0.3s cubic-bezier(0.77, 0, 0.175, 1);
			}
		}
	}

	.slide__btn:hover {
		&::before {
			width: 0;
			transition: all 0.4s ease;
		}

		& .slide__btn-text {
			transform: translateX(-2.2em);
			transition:
				transform 0.5s ease,
				width 1s ease;

			&::before {
				width: 100%;
				max-width: 100%;
				transition: width 0.15s cubic-bezier(0.77, 0, 0.175, 1);
			}

			&::after {
				width: 100%;
				transition: width 0.15s 0.3s cubic-bezier(0.77, 0, 0.175, 1);
			}

			& > span {
				&::before {
					left: 0;
					height: 100%;
					transition: height 0.15s 0.45s cubic-bezier(0.77, 0, 0.175, 1);
				}

				&::after {
					right: 0;
					height: 100%;
					transition: height 0.15s 0.15s cubic-bezier(0.77, 0, 0.175, 1);
				}
			}
		}
	}

	.slide__text {
		padding: 2rem 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.slide__description {
		font-size: 1.4rem;
	}

	.slide__other-btns {
		padding: 2rem;
	}

	.slide__headline {
		margin: 0;
		font-size: 6rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		line-height: 0.87;
		font-weight: 700;
		will-change: auto;
		text-shadow: 2px 5px 45px rgba(121, 142, 152, 0.2);

		& > p {
			margin: 0;
		}
	}

	.slide__side-text {
		position: absolute;
		left: 5vw;
		writing-mode: vertical-rl;
		top: 10vh;
		text-transform: uppercase;
		color: rgb(var(--c-foreground));
		letter-spacing: 0.12rem;
		font-size: 0.7rem;
		line-height: 1;

		&::after {
			content: '';
			width: 1px;
			background-color: rgb(var(--c-foreground));
			height: 40px;
			display: block;
			position: absolute;
			top: calc(100% + 25px);
			left: 50%;
			transform: translateX(-50%);
		}

		& > span:first-child {
			font-weight: 700;
		}
	}

	.controls-container {
		position: absolute;
		display: flex;
		bottom: 0;
		right: 0;
		align-items: flex-end;
	}

	.control-button {
		background-color: rgba(208, 206, 204, 0.32);
		border: 0;
		padding: 1.6rem 2.2rem;
		flex-basis: 0;
		flex-grow: 1;
		min-width: 15rem;
		transition: 250ms ease-in-out;
		outline: 0;
		text-transform: uppercase;
		color: rgb(var(--c-foreground));
		letter-spacing: 0.12rem;
		font-size: 0.7rem;
		line-height: 1;

		&.active {
			font-weight: 700;
			background-color: #3b3e45;
			padding-top: 1.9rem;
			margin-bottom: -0.3rem;
			position: relative;

			&::after {
				content: '';
				background: rgb(var(--c-foreground));
				height: 5px;
				width: calc(100% - 8px);
				position: absolute;
				top: 100%;
				left: 4px;
			}
		}

		&:not(.active) {
			& + .control-button {
				border-left: 1px solid rgba(255, 255, 255, 0.2);
			}

			&:hover {
				color: rgb(var(--c-background));
				background-color: rgb(var(--c-foreground));
			}
		}
	}

	.pagination-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.pagination-item {
		width: 30px;
		height: 1px;
		border: none;
		background-color: rgba(255, 255, 255, 0.6);
		transition: 180ms ease-in-out;

		& + .pagination-item {
			margin-top: 1rem;
		}

		&:not(.active):hover {
			background-color: #fff;
			width: 35px;
		}

		&.active {
			background-color: #fff;
			position: relative;
			transform: translateX(-0.6rem);
			width: 35px;

			&::after {
				content: '';
				height: 4px;
				width: 2px;
				border-radius: 35%;
				background-color: #fff;
				display: inline-block;
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateX(0.6rem) translateY(-50%);
			}
		}
	}

	/* Slider Animations */

	.slide {
		opacity: 0;
		transition-delay: 1.4s;
		transition-duration: 0s;
		transition-property: opacity;
		will-change: opacity, transform;
	}
	.slide:not(.active) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
		-wekbit-animation-name: slide-left;
		animation-name: slide-left;
		-webkit-animation-duration: 0.9s;
		animation-duration: 0.9s;
		-webkit-animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
		animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
		pointer-events: none;
	}
	.slide:not(.active) .slide__headline,
	.slide:not(.active) .slide__description,
	.slide:not(.active) .slide__side-text {
		-webkit-animation-name: cut-txt-up;
		animation-name: cut-txt-up;
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
	}
	.slide.active {
		transition-delay: 0s;
		opacity: 1;
	}
	.slide.active .slide__headline > p,
	.slide.active .slide__description {
		opacity: 0;
		-webkit-animation-delay: 0.8s;
		animation-delay: 0.8s;
		-webkit-animation-name: cut-txt-down;
		animation-name: cut-txt-down;
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-timing-function: ease;
		animation-timing-function: ease;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}

	.is-previous .slide:not(.active) {
		-webkit-animation: none;
		animation: none;
	}
	.is-previous .slide.active {
		transform: translateX(-100%);
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
		-webkit-animation-name: slide-right;
		animation-name: slide-right;
		-webkit-animation-duration: 0.8s;
		animation-duration: 0.8s;
		-webkit-animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
		animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
	}

	.first-load .slide.active .slide__side-text,
	.first-load .controls-container {
		opacity: 0;
		-webkit-animation-name: fade-in;
		animation-name: fade-in;
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
		-webkit-animation-duration: 0.3s;
		animation-duration: 0.3s;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	.first-load .slide.active .slide__headline > p,
	.first-load .slide.active .slide__description {
		-webkit-animation-name: fade-in;
		animation-name: fade-in;
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
		-webkit-animation-duration: 0.7s;
		animation-duration: 0.7s;
	}

	@-webkit-keyframes slide-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	@keyframes slide-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	@-webkit-keyframes slide-right {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes slide-right {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@-webkit-keyframes cut-txt-up {
		from {
			-webkit-clip-path: inset(0 0 -10% 0);
			clip-path: inset(0 0 -10% 0);
		}
		to {
			-webkit-clip-path: inset(0 0 100% 0);
			clip-path: inset(0 0 100% 0);
		}
	}
	@keyframes cut-txt-up {
		from {
			-webkit-clip-path: inset(0 0 -10% 0);
			clip-path: inset(0 0 -10% 0);
		}
		to {
			-webkit-clip-path: inset(0 0 100% 0);
			clip-path: inset(0 0 100% 0);
		}
	}

	@keyframes cut-txt-down {
		from {
			-webkit-clip-path: inset(100% 0 0 0);
			clip-path: inset(100% 0 0 0);
		}
		to {
			-webkit-clip-path: inset(-10% 0 -20% 0);
			clip-path: inset(-10% 0 -20% 0);
			opacity: 1;
		}
	}
	@keyframes cut-txt-down {
		from {
			-webkit-clip-path: inset(100% 0 0 0);
			clip-path: inset(100% 0 0 0);
		}
		to {
			-webkit-clip-path: inset(-10% 0 -20% 0);
			clip-path: inset(-10% 0 -20% 0);
			opacity: 1;
		}
	}

	@keyframes cut-txt-down-from-top {
		from {
			-webkit-clip-path: inset(0 0 100% 0);
			clip-path: inset(0 0 100% 0);
		}
		to {
			-webkit-clip-path: inset(0 0 -30% 0);
			clip-path: inset(0 0 -30% 0);
			opacity: 1;
		}
	}
	@keyframes cut-txt-down-from-top {
		from {
			-webkit-clip-path: inset(0 0 100% 0);
			clip-path: inset(0 0 100% 0);
		}
		to {
			-webkit-clip-path: inset(0 0 -30% 0);
			clip-path: inset(0 0 -30% 0);
			opacity: 1;
		}
	}

	@-webkit-keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* ---------- START Navigation Section ---------- */

	.navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 4rem;
		height: calc(100% * 1 / 8);
	}

	.title {
		text-transform: uppercase;
		color: rgb(var(--c-foreground));
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

	.sections,
	.links {
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

		&:hover {
			background-position: 0;

			&::before {
				width: 100%;
			}
		}
	}
</style>
