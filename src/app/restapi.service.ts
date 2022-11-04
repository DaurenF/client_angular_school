import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

login(username:string,password:string){
    
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

  return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
}

  getUsers() {
    let username='dauren'
    let password='qwerty'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return  this.http.get("http://localhost:8080/home",{headers}); 
  }

    deleteStudent(id:number){
        let username='dauren'
        let password='qwerty'
         const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        let url = 'http://localhost:8080/home/'+id+'/delete';
        
        console.log(url);
        return this.http.delete(url, {headers}).subscribe((res) =>{
            console.log(res);
        });
    }

    createStudent(data:any){
        let username='dauren'
            let password='qwerty'
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        console.log(data);
        return  this.http.post<any>("http://localhost:8080/home/add",data, {headers}).subscribe((resp)=>{
            console.log(resp);
        });
    }
}
