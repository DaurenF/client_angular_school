import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
 

  constructor(private service:RestapiService,private router:Router) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    let resp=this.service.getUsers();
    resp.subscribe(data=>this.users=data);
    
  }
  deleteStudent(id:number){
    this.service.deleteStudent(id);
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
  });
  }

}
