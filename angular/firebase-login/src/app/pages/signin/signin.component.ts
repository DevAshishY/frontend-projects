import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _auth:AuthService,private router:Router,private toster:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const {email, password} =  f.form.value;
    this._auth.signIn(email,password).then((res)=>{
      this.router.navigateByUrl('/');
      this.toster.success('signup sucess')
    })
    .catch((err)=>{
      console.log(err.message)
      this.toster.error('signup faild')

    })
    }
}
