<script>
	import Router from "svelte-spa-router";
	import Authguard from './auth/Authguard.svelte';
	import routes from "./routes";
	import {auth} from './authStore';


	const logoutApplication = ()=>{
		$auth.signout();
	}
</script>

<div id="app">
	<Authguard>
	<nav class="navbar navbar-expand-lg bg-light" slot="authed">
		<div class="container">
			<a class="navbar-brand" href="#/">Freelancer4U</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					{#if $auth.user?.userType == "admin"}						
					<li class="nav-item">
						<a class="nav-link" href="#/products">Products</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/offers">Offers</a>
					</li>
					{/if}
					<li class="nav-item">
						<a class="nav-link" on:click={logoutApplication} href="javascript:void(0);">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<nav class="navbar navbar-expand-lg bg-light" slot="not_authed">
		<div class="container">
			<a class="navbar-brand" href="#/">Freelancer4U</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							href="#/signup">Signup</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/login" >Login</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</Authguard>
	<div class="container">
		<Router {routes} />
	</div>
	
</div>
