import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import {  AuthService } from 'src/app/services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    email:['', [Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  authService: any;
  constructor(private formBuilder:FormBuilder, private _router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }


  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData) =>{ 
          console.log(userData);
        },
        error:(errorData)=>{
          console.error(errorData);
        },
        complete:() =>{
          console.info("login completo")
          this._router.navigateByUrl('/inicio')
          this.loginForm.reset()
        }
      })

    }
    else{ 
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar datos");

    }
  }

  registrarse(){
    // this.registerForm.controls.oAuth.setValue();
    // this.registerForm.controls.estaAutenticado.setValue();
    // this.registerForm.controls.mensaje.setValue();
    // this.registerForm.controls.token.setValue();
    console.log(this.loginForm.value);
    // return;
    this.authService.register(this.loginForm.value)
    .subscribe( (response: any) => {
      console.log(response)
      sessionStorage.setItem('login', 'true');
      this._router.navigate(['home']);
    }),
    ( (error: any) => console.log(error));
  }



  registrarseWithGoogle(){
    this.loginForm.controls.oAuth.setValue(true);
    console.log(this.loginForm.value);
    // return;
    this.authService.loginWhitGoogle()
    .then(
      (res: any) => {
        console.log(res)
        this.loginForm.controls.oAuth.setValue(true);
        this.loginForm.controls.estaAutenticado.setValue(false);
        this.loginForm.controls.mensaje.setValue("registrado con google");
        this.loginForm.controls.token.setValue(res.user.accessToken);
        this.loginForm.controls.correo.setValue(res.user.email);
        this.loginForm.controls.usuario1.setValue(res.user.displayName);

        console.log(this.loginForm.getRawValue());
        this.registrarse();
        // this.registerForm.controls.password.setValue(res.user);

        // this._toolsService.UserPerfil.nombre = res.user.displayName!;
        // this._toolsService.UserPerfil.correo = res.user.email!;
        // this._toolsService.UserPerfil.imagen = res.user.photoURL!;
        // this._router.navigate(['dashboard']);
      }
    )
    .catch( (error: any) => console.log(error))
  }

}
 