import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  totalItems = 0;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ){
    this.cartService.totalItems$.subscribe(total =>{
      this.totalItems = total;
    });
  
    }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  estaLogueado(){
    return this.authService.getUsuario() !== null;
  }

  getUsuario(){
    return this.authService.getUsuario();
  }

  esAdmin(){
    return this.authService.esAdmin();
  }

}