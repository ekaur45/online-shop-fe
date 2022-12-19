<script>
	import {auth} from '../authStore';
</script>

{#if $auth.user}
	<slot name="authed"></slot>
{:else}
	<slot name="not_authed"></slot>
{/if}