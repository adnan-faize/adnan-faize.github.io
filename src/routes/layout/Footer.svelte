<script lang="ts">
	import MagneticButton from '$lib/components/MagneticButton.svelte';

	import patreon_svg from '$lib/icons/patreon.svg';
	import kofi_svg from '$lib/icons/kofi.svg';
	import amazon_svg from '$lib/icons/amazon.svg';
</script>

<footer>
	<section>
		<MagneticButton
			link="https://www.patreon.com/adnan_faize"
			tooltip="Patreon"
			img_src={patreon_svg}
			add_style="filter: invert(.9);"
		/>
		<MagneticButton link="" tooltip="Ko-Fi" img_src={kofi_svg} add_style="filter: invert(.9);" />
		<MagneticButton
			link="https://www.amazon.fr/hz/wishlist/ls/ZW046I81ZXFR?ref_=wl_share"
			tooltip="Wishlist"
			img_src={amazon_svg}
			add_style="filter: invert(.9);"
		/>
	</section>
	<section class="middle">
		<button on:click={() => scrollTo({ top: 0, behavior: 'smooth' })}>
			<span class="icon">keyboard_arrow_up</span>
			<p>to top</p>
		</button>
	</section>
	<section>
		<p class="copyright">
			Copyright © Adnan Faize
			<br />
			All rights reserved
		</p>
	</section>
</footer>

<style>
	footer {
		padding: 0.5rem 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		font-family: 'Clash Display';
		border-top: 1px solid rgb(var(--c-foreground));
	}

	section:not(.middle) {
		width: 40vw;
	}

	button {
		margin: 0;
		padding: 0.5rem 1rem;
		font-weight: 600;
		text-align: center;
		text-transform: uppercase;
		border: none;
		-webkit-text-fill-color: transparent;
		background: linear-gradient(
			to top,
			rgb(var(--c-interaction)) 50%,
			rgb(var(--c-foreground)) 50%
		);
		background-size: 100% 200%;
		background-position: 0 -25%;
		background-clip: text;
		transition: all 500ms ease-out;

		&:hover {
			background-position: 0 100%;
		}
	}

	button .icon {
		font-size: 4rem !important;
		font-variation-settings:
			'FILL' 0,
			'wght' 100,
			'GRAD' 0,
			'opsz' 24 !important;
	}

	button p {
		margin: 0;
	}

	.copyright {
		padding: 1rem;
		text-align: right;
		opacity: 0.8;
	}
</style>
