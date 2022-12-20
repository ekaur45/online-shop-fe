<script>
    import axios from "axios";
    import { config } from "../config";
    import {auth} from "./../authStore";
    let sign = {
        username:"",
        password:"",
        reset:()=>{
            this.username = "";
            this.password = "";
        }
    }
    const onFormSubmit = async (e)=>{
        e.preventDefault();
        let response = await axios.get(`${config.baseUrl}api/v1/login/${decodeURI(sign.username)}/${decodeURI(sign.password)}`)
        if(response.status === 200){
            console.log("======  LOGIN  ======");
            delete response.data.password;
        $auth.signin(response.data,()=>{
            window.location.href="#/"
        });
        console.log("======  LOGIN  ======");
        }
      
    }
</script>
<div class="row mt-3">
    <div class="col-md-6 offset-md-3">
        <form class="card" on:submit={onFormSubmit}>
            <div class="card-header">
                <h4>Login</h4>
            </div>
           <div class="card-body">
            <div class="form-group mb-3">
                <label>Username</label>
                <input type="text" name="username" bind:value={sign.username} id="username" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                <input type="password" name="password" bind:value={sign.password} id="password" class="form-control">
            </div>
            <div class="form-group d-flex flex-column text-center">
                <button class="btn btn-primary w-100 mb-3">Login</button>
                <a href="#/signup">Signup</a>                
            </div>
           </div>
        </form>
    </div>
</div>