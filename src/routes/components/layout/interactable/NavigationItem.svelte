<script lang="ts">
	interface NavigationItemInterface {
    id: string,
    title: string
  }

	export let data: NavigationItemInterface;

	function handleClick(e: MouseEvent) {
		e.preventDefault();
		document.querySelector('#' + data.id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<a class="nav-item" href={'#' + data.id} on:click={handleClick} data-cursor-pointer>
	{data.title}
</a>
