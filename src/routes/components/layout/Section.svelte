<script>
	export let data;
</script>

<section id={data.id} data-app-section>
	<header>
		<h2>{data.title}</h2>
	</header>
	<div>
		<main>
			<slot />
		</main>
	</div>
</section>

<style>
	section {
		overflow: auto;
		min-height: 100vh;
	}

	header {
		display: flex;
		align-items: center;
		text-transform: uppercase;
		font-family: 'Clash Display';
		font-size: 1.25rem;
		width: fit-content;
		padding-left: 15vw;
		padding-right: 3em;
		margin: 1em 0;
		height: 3em;
		color: rgb(var(--background));
		background: rgb(var(--foreground));
	}

  div {
    display: flex;
    justify-content: center;
  }

  main {
    width: 1200px;
  }
</style>
