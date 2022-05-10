import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  public loggedIn: boolean = false;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    let emailLoggedIn: string = localStorage.getItem('email')!;
    emailLoggedIn === '' ? this.loggedIn = false : this.loggedIn = true;
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  onClickLogout() {
    localStorage.setItem('email', '');
    window.location.reload();
    //reload stranice, nadji kod na netu
  }
  if (loggedIn =true ) {
    window.location.reload();
  }
}
