import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  firebase = inject(FirebaseService);

  ngOnInit(){
      
  }
  submit(){
    if(this.form.valid){
      this.firebase.signin(this.form.value as User)
      .then((res)=>{
        console.log(res);
        
      })
    }
  }
}
