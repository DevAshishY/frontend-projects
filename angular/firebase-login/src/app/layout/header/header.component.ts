import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any
  constructor(private auth:AuthService, private router:Router,private toster:ToastrService) {
    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
  }

  ngOnInit(): void {
  }

  async handleSignOut(){
  try{
 const res =  await this.auth.signOut();
 this.router.navigateByUrl('/sign')
 this.toster.info('Login again to continue');
 this.email = null;
  }
  catch(error){
    this.toster.error('something is wrong')
  }
  }

}
