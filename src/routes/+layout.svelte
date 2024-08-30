<script>
	import Header from './Header.svelte';
	import '../app.css';
	import { GithubLogo } from 'phosphor-svelte';
	import { VITE_GITHUB_LINK } from '$lib/common/env';
</script>

<div class="flex flex-col h-screen">
	<Header />

	<main class="bg-secondary-background h-full z-20">
		<slot />
	</main>

	<footer class="flex items-center justify-end bg-secondary-default h-20 z-50">
		<a href={VITE_GITHUB_LINK}>
			<GithubLogo size={40} class="m-4 text-secondary-dark" weight='duotone' />
		</a>
	</footer>
</div>
