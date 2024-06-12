<script lang="ts">
  import Section from './components/layout/Section.svelte';
  import Introduction from './components/page/Introduction.svelte';
  import About from './components/page/About.svelte';
  import Projects from './components/page/Projects.svelte';
  import Shop from './components/page/Shop.svelte';
	import Contact from './components/page/Contact.svelte';

  import sections from '$lib/data/sections.json';

  const section_components = {
    Introduction,
    About,
    Projects,
    Shop,
    Contact
  }

  const getComponent = (name: string) => {
    if (name in section_components)
      return section_components[name as keyof typeof section_components];
    return null;
  }
</script>

{#each sections as section}
  <Section data={section}>
    <svelte:component this={getComponent(section.component_name)} />
  </Section>
{/each}
