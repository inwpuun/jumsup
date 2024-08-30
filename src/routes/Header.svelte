<script lang="ts">
	import { page } from '$app/stores';
	import NavbarButton from '$lib/components/headers/navbarButton.svelte';
	import { Folder, House, UserCircle } from 'phosphor-svelte';

	$: currentPath = $page.url.pathname;
</script>

<header class="">
	<nav class="flex justify-center h-[60px] z-50">
		<ul class="flex gap-10 bg-secondary-light justify-center items-center w-full h-full font-looped text-secondary-dark text-lg font-semibold z-50">
			<NavbarButton pathname={currentPath} title="Home">
				<House slot="icon" size={32} weight='duotone' />
			</NavbarButton>
			<NavbarButton pathname={currentPath} title="Library">
				<Folder slot="icon" size={32} weight='duotone' />
			</NavbarButton>
			<NavbarButton pathname={currentPath} title="Profile">
				<UserCircle slot="icon" size={32} weight='duotone' />
			</NavbarButton>
			<NavbarButton pathname={currentPath} title="Test">
			</NavbarButton>
		</ul>
	</nav>
</header>
