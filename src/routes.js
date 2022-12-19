
import Home from "./pages/Home.svelte";
import Freelancers from "./pages/Freelancers.svelte";
import Jobs from "./pages/Jobs.svelte";
import Products from "./pages/Products.svelte";
import Offers from "./pages/Offers.svelte";
import Login from "./pages/Login.svelte";
import Signup from "./pages/Signup.svelte";

export default {
    '/': Home,
    '/home': Home,
    '/products': Products,
    '/offers': Offers,
    '/freelancers': Freelancers,
    '/jobs': Jobs,
    '/login': Login,
    '/signup': Signup
}