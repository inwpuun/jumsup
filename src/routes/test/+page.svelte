<script>

	import Test from '$lib/components/library/test.svelte';
// import WordCard from '$lib/components/library/wordCard.svelte';

	const carddetails = {
		id: '1',
		title: 'Test',
		imageUrl: 'https://source.unsplash.com/random/800x600'
	};
</script>

<div class="flex gap-4 w-full h-full justify-center items-center">
	<!-- <WordCard /> -->
	<Test card={carddetails} />
</div>
