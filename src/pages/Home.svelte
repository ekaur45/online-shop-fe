<script>
    import axios from "axios";
    import { config } from "../config";
    let products = [];
    async function getProducts(){
        let response = await axios.get(`${config.baseUrl}api/v1/products`);
        if(response.status == 200){
            products = response.data;
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
                    <span>{product.name}</span> <br>
                    <label>Price: ${product.price}</label> <br>
                    <label>Quantity: $ {product.quantity}</label>
                </div>
                <div class="d-flex">
                    <input type="number" class="form-control">
                    <button class="btn btn-primary ms-3">Offer</button>
                </div>
            </div>
        </div>
    </div>
    {/each}
</div>