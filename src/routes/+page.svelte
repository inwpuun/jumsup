<script>
	import BlinkyStar from '$lib/components/home/blinkyStar.svelte';
// import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Jumsup - Home</title>
	<meta name="description" content="Vocabulary memorized app" />
</svelte:head>

<section class="flex flex-col gap-2 w-full h-full justify-center items-center">
	<BlinkyStar />
	<h1 class="font-sans text-9xl text-secondary-dark drop-shadow-md z-10">Welcome!!!</h1>
	<p class="font-sans text-2xl text-secondary-dark drop-shadow-md">Jumsup offers interactive flashcards, quizzes, and personalized practice to help users efficiently learn and retain vocabulary.</p>
	<a href="/library" class="mt-10 bg-primary-default text-secondary-light font-sans text-2xl p-2 rounded-md hover:bg-primary-dark hover:text-secondary-background hover:scale-150 transition-all ease-in-out duration-300 hover:shadow-secondary-default hover:shadow-lg hover:animate-pulse z-10">Get Started</a>
	<!-- <Counter /> -->
</section>
