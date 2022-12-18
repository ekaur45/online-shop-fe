<script>
    import axios from "axios";
    import {config} from "../config";
        let jobs = [];
        let imageRes = "";
    let job = {
        name: null,
        image: null,
        price: null,
        quantity: null,
    };
function createProduct(){
    var form = {"name":job.name,
    "price":job.price,
    "quantity":job.quantity,
    "imagePath":imageRes}
    axios.post(`${config.baseUrl}api/v1/product`,form).then(x=>{
        getProducts();
    }).then(x=>{
        
    })
}
function uploadFile(file){
    var form = new FormData();
    form.append("file",file);
    axios.post(`${config.baseUrl}api/v1/upload`,form).then((x)=>{
       if(x.status == 200){
        imageRes = x.data;
       }
    })
}
function deleteProduct(id){
    if(confirm("Do you really wnat delete?")){

        axios.get(`${config.baseUrl}api/v1/deleteProducts/${id}`).then(x=>{
            getProducts();
        })
    }
}
function getProducts(){
axios.get(`${config.baseUrl}api/v1/products`).then(x=>{
    jobs = x.data;
})
}
getProducts();
</script>
<h1 class="mt-3">Create Product</h1>
<form class="mb-5">
    <div class="row">
        <div class="col-md-4 ">
            <label class="form-label" for="description">Name</label>
            <input
                bind:value={job.name}
                class="form-control"
                id="name"
                type="text"
            />
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="description">Image</label>
            <input
                bind:value={job.image}
                class="form-control"
                id="image"
                type="file"
                on:change={e=>{uploadFile(e.target.files[0])}}
            />
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="description">Price</label>
            <input
                bind:value={job.price}
                class="form-control"
                id="price"
                type="number"
            />
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label" for="description">Quantity</label>
            <input
                bind:value={job.quantity}
                class="form-control"
                id="quantity"
                type="number"
            />
        </div>
    </div>
    <button type="button" class="btn btn-primary" on:click={createProduct}>Submit</button>
    
</form>

<h1>All Products</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {#each jobs as job}
            <tr>
                <td>{job.name}</td>
                <td>
                    <img src="{config.baseUrl+job.imagePath}" alt="" style="height: 100px;width:100px;">
                    
                </td>
                <td>{job.price}</td>
                <td>{job.quantity}</td>
                <td >
                    <a on:click={deleteProduct(job.id)}>
                        <i class="fa fa-trash-can text-danger"></i>
                    </a>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
