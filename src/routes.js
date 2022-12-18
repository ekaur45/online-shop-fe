
import Home from "./pages/Home.svelte";
import Freelancers from "./pages/Freelancers.svelte";
import Jobs from "./pages/Jobs.svelte";
import Products from "./pages/Products.svelte";
import Offers from "./pages/Offers.svelte";

export default {
    '/': Home,
    '/home': Home,
    '/products':Products,
    '/offers':Offers,
    '/freelancers': Freelancers,

    '/jobs': Jobs,
}