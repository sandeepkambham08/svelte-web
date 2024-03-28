<script lang="ts">
	import { readableBridgeLink } from '../../stores/bridgeLink';
</script>

<p>Tab 1 web</p>

<button
	on:click={async () => {
		if ($readableBridgeLink) {
			await $readableBridgeLink.increase();
			console.log('increase clicked from tab1 web');
		}
	}}
>
	Increase from tab1 web
</button>
