<script>
	import {auth} from '../authStore';
    import Redirect from '../pages/Redirect.svelte';
</script>

{#if $auth.user}
    <Redirect to="#/"/>
	<slot name="authed"></slot>
{:else}
    <Redirect to="#/login"/>
	<slot name="not_authed"></slot>
{/if}