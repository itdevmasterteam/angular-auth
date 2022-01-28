import { Component,ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validators,NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   role = [
    {id:1,name:'Employee'},
    {id:2,name:'Manager'},
    {id:3,name:'Ceo'},
    {id:4,name:'Director'},

   ]
  
  roleId;

  // @ViewChild('formDirective') private formDirective: NgForm;
  signupForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }
  // signupForm:FormGroup
ngOnInit() {
  this.signupForm = this.fb.group({
    firstName:['',[Validators.required]],
     lastName: ['', [Validators.required, Validators.maxLength(8)]],
     age: ['', [Validators.required]],
      gender:['',[Validators.required]],
     date: [new Date(2019,12,1), [Validators.required]],
      role:[4,[Validators.required]],
    password:['',[Validators.required]],
     confirmPassword: ['', [Validators.required]],
    
     
     
     
     
  }, {
      validator: () => {
      // let valid
      if (this.signupForm?.controls?.password?.value != this.signupForm?.controls?.confirmPassword?.value) {
        // valid = false;
        this.signupForm.controls.confirmPassword.setErrors({ validatePasswordConfirmation: true });
        // }
        console.log('this', this.signupForm)
      // return valid;
    }
     }
   })
  
}


  hide = true;  
  submitted = false;
  signUpSubmitted = false;
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(8)]],

  })
 
 
  
  
   get signUpControl() {
     
    return  this.signupForm.controls
   }
  

  confirmPasswordChecker(group: FormGroup) {
    // console.log('signUpform',group.get('confirmPassword'))
    let valid = true;
   
      
      
    }

  
   get formControl() {
    return  this.loginForm.controls
   }
  
  
  onSubmit(loginForm) {
    this.submitted=true
    console.log({loginForm})
    console.log('dsada',this.formControl)
  }

  signUpSubmit() {
    this.signUpSubmitted=true
  }

  tabClicked() {
    console.log('hi',this.roleId)
    // this.resetForm()
    // this.formDirective.resetForm();
  }
//   resetForm() {
//  }
  


  title = 'angular-auth';
}
