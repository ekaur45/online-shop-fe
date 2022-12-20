import { writable } from "svelte/store";

const fakeAuth = {
  isAuthenticated: true,
  signin(data,cb) {
    fakeAuth.isAuthenticated = true;
    sessionStorage.setItem("user",JSON.stringify(data));
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    sessionStorage.setItem("user",null);
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const signin = (data,cb) => {    
  return fakeAuth.signin(data,() => {
    auth.update((prevAuth) => ({
      ...prevAuth,      
      user: sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):""
    }));
    cb();
  });
};

const signout = (cb) => {
  return fakeAuth.signout(() => {
    auth.update((prevAuth) => ({
      ...prevAuth,
      user: sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):""
    }));
    cb();
  });
};
let u = null;
if(sessionStorage.getItem("user")){
    u = JSON.parse(sessionStorage.getItem("user"))
}
export const auth = writable({
  signin,
  signout,
  user: u
});
