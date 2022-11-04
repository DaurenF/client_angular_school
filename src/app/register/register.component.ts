import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router, private service:RestapiService ) {
    
   }
   
   onSubmit(data:any) {
    
    console.warn(data);
    this.service.createStudent(data);
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
  });
  }

  ngOnInit(): void {
  }

  
}


