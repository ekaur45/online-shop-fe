<script>
    import axios from "axios";
    import { config } from "../config";
    let products = [];
    let offers = [];

    let offer={
        buyerName:"",
        buyerContact:"",
        productId:"",
        productQuantity:0,
        productBill:0,
        reset:function(){
            this.buyerName = "";
            this.buyerContact = "";
            this.productId = "";
            this.productQuantity = 0;
            this.productBill = 0;
        }
    }
    async function getProducts(){
        let response = await axios.get(`${config.baseUrl}api/v1/products`);
        if(response.status == 200){
            products = response.data;            
        }
    }
    async function getOffers(){
        let response = await axios.get(`${config.baseUrl}api/v1/offers`);
        if(response.status == 200){
            offers = response.data;
        }
    }
    async function createOffer(){
        await axios.post(`${config.baseUrl}api/v1/offer`,offer);
        getOffers();
    }
    getProducts();
    getOffers();
</script>
<h1>All Offers</h1>
<form class="mb-5">
    <div class="row">
        <div class="col-md-4 mb-3">
            <label class="form-label" for="buyerName">Buyer name</label>
            <input type="text" bind:value={offer.buyerName} name="buyerName" id="buyerName" class="form-control">
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="buyerContact">Buyer Contact</label>
            <input type="text" bind:value={offer.buyerContact} name="buyerContact" id="buyerContact" class="form-control">
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="productId">Product</label>
            <select name="productId" bind:value={offer.productId} id="productId" class="form-control">
                {#each products as product}
                    <option value="{product.id}">{product.name}</option>
                {/each}
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="productQuantity">Product Quantity</label>
            <input type="number" name="productQuantity" bind:value={offer.productQuantity} id="productQuantity" class="form-control">
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="productBill">Bill</label>
            <input type="number" name="productBill" id="productBill" bind:value={offer.productBill} class="form-control">
        </div>
    </div>
    <button type="button" class="btn btn-primary" on:click={createOffer}>Submit</button>
</form>

<h1>All Offers</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Buyer name</th>
            <th scope="col">Buyer contact</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Bill</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {#each offers as offer}
           <tr>
            <td>
                {offer.buyerName}
            </td>
            <td>
                {offer.buyerContact}
            </td>
            <td>
                {offer.productId}
            </td>
            <td>
                {offer.productQuantity}
            </td>
            <td>
                {offer.productBill}
            </td>
            <td>
                <a>
                    <i class="fa fa-trash"></i>
                </a>
            </td>
           </tr>
        {/each}
    </tbody>
</table>
