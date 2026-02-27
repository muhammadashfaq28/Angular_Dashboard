import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  isLoggedIn = signal(!!localStorage.getItem('user'))

  login(email: string, password: string) {
    if (email === 'ashfaq@gmail.com' && password === 'intern123') {
      localStorage.setItem('user', 'true');
      this.isLoggedIn.set(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn.set(false); 
  }
}





// import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Auth {

//   isLoggedIn = signal(false)

//   login(email: string, password: string){
//     if (email === 'ashfaq@gmail.com' && password === 'intern123'){
//       this.isLoggedIn.set(true)
//       return true
//     } else {
//       return false
//     }
//   }
  
//   logout(){
//     this.isLoggedIn.set(false)
//   }
  
// }

