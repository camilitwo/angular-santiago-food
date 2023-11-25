import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/AuthService";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing-stores',
  templateUrl: './landing-stores.component.html',
  styleUrls: ['./landing-stores.component.css']
})
export class LandingStoresComponent  implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit() {
    // Example: Check authentication status on component initialization
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/'])
        let timerInterval: number | undefined;
        Swal.fire({
          title: "No estás autenticado",
          html: "Serás redirigido al inicio de sesión en <b></b> segundos.",
          timer:5000,
          timerProgressBar: false,
          didOpen: () => {
            // @ts-ignore
            Swal.showLoading();
            // @ts-ignore
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              // @ts-ignore
              timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            this.router.navigate(['/login']).then(r => console.log(r));
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            this.router.navigate(['/login']).then(r => console.log(r));
          }
        });


      }
    });
  }

}
