<script>
    import axios from "axios";
    import { config } from "../config";
    import {auth} from "./../authStore";
    let products = [];
    async function getProducts(){
        let response = await axios.get(`${config.baseUrl}api/v1/products`);
        if(response.status == 200){
            products = response.data;
        }
    }
    const makeOffer = async (product)=>{
        debugger
        let buyerId = $auth.user.id;
        let productId = product.id;
        let offerPrice = 10;
        let offerStatus = "pending";
        let result = await axios.post(`${config.baseUrl}api/v1/offer`,{buyerId,productId,offerPrice,offerStatus});
        if(result.status == 200){
            alert("Done");
        }

    }
    getProducts();
</script>
<h1>Freelancer4U</h1>
<div class="row">
    {#each products as product }
    <div class="col-md-3">
        <div class="card" style="height: 300px;">
            <div class="card-body d-flex flex-column">
                <img src="{config.baseUrl+product.imagePath}" alt="" style="width: 100%;height:100%">
                <div>
                    <div class="d-flex justify-content-between">
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                    </div>
                    <span> <b>{product.quantity}</b> items available</span>
                </div>
                <span>Make your offer</span>
                <div class="d-flex">
                    <input type="number" id="hello" class="form-control">
                    <button class="btn btn-primary ms-3" on:click={()=>makeOffer(product)}>Offer</button>
                </div>
            </div>
        </div>
    </div>
    {/each}
</div>