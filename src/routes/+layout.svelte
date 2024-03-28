<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { readableBridgeLink } from '../stores/bridgeLink';

	let user: any;
	let count: any;

	onMount(() => {
		user = $readableBridgeLink && $readableBridgeLink.store.getState().user;
		count = $readableBridgeLink && $readableBridgeLink.store.getState().count;

		$readableBridgeLink &&
			$readableBridgeLink.store.subscribe((state) => {
				count = state.count;
				console.log('subscription triggered -', state);
			});
	});
</script>

<div class="flex min-h-screen flex-col">
	{#if browser}
		<h1>
			{count}
		</h1>
	{/if}
	<div class="grow">
		<slot />
	</div>
</div>
