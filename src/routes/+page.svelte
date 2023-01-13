<script>
	import './icons';
	import Icon from '$lib/Icon.svelte';
	import { strokeWidth, tailwind, tailwindDefault, tailwindMini } from '$lib/icons';
</script>

<div class="">
	<Icon name="face-smile" />
	<Icon name="loading-circle" />
	<Icon name="shoob-logo" />
	<Icon name="shoob-colored" />
	<Icon name="smiley-colored" />
	<Icon name="instagram-colored" />
</div>

<style>
	:global(.h-6) {
		height: 3.5rem;
	}
	:global(.w-6) {
		height: 3.5rem;
	}
	:global(.h-5) {
		height: 2.5rem;
	}
	:global(.w-5) {
		height: 2.5rem;
	}
	:global(.h-12) {
		height: 2.5rem;
	}
</style>
