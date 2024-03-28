<script lang="ts">
	import { readableBridgeLink } from '../../stores/bridgeLink';
</script>

<p>Tab 2 web</p>

<button
	on:click={async () => {
		if ($readableBridgeLink) {
			await $readableBridgeLink.increase();
			console.log('increase clicked from tab2 web');
		}
	}}
>
	Increase from tab2 web
</button>
