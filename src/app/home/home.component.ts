import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { ApidataService } from 'src/app/apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apidata = [];

  dataaa = [];
  userId={};
  id: any;
  totalTask = {};
  cmptsk= {};
  ncmptsk= {};
  userInfo = {};
  constructor(private ApiService: ApidataService) { }

  ngOnInit() {
    this.getdata();
  }
getdata(): void{
  this.ApiService.getApi().subscribe((data: any[])=> {
    this.apidata = data;
    console.log("datat",data);
    data.forEach((item, index) => {

      console.log("userId",item.userId); 
      console.log("length",(item.userId));
      this.userId = item.userId;
      //console.log("item",item);
      if(item.completed){
        if(!this.cmptsk[item.userId])
        this.cmptsk[item.userId]=1;      
        else 
        this.cmptsk[item.userId] = this.cmptsk[item.userId]  + 1;
        this.totalTask[item.userId] = this.totalTask[item.userId]  + 1;
      }else{
        if(!this.ncmptsk[item.userId])
        (this.ncmptsk[item.userId] = 1) 
        else 
        this.ncmptsk[item.userId] = this.ncmptsk[item.userId]  + 1;
        this.totalTask[item.userId] = this.totalTask[item.userId]  + 1;
        } 
      })
      this.dataaa = [this.userId,this.cmptsk,this.ncmptsk];
      console.log('complete',this.cmptsk);
      console.log('notcomplete',this.ncmptsk);
      console.log('total',this.totalTask);
      
    //   data.forEach((item, index)=>{
    //     item["completed"] = {};
    //     if(item["completed"]){
    //         if(this.userInfo[item["userId"]]){
    //             this.userInfo[item["userId"]]["completed"] += 1
    //             this.userInfo[item["userId"]]["total"] += 1 
    //         }else{
    //             this.userInfo[item["userId"]]["completed"] = 1
    //             this.userInfo[item["userId"]]["total"] = 1 
    //         }  
    //     }else{    
    //         if(this.userInfo[item["userId"]]){
    //             this.userInfo[item["userId"]]["total"] += 1 
    //         }else{
    //             this.userInfo[item["userId"]]["completed"] = 0
    //             this.userInfo[item["userId"]]["total"] = 1 
    //         }  
    //     }
    // })
    
    // for (var id in this.userInfo) {
    //     if (data.hasOwnProperty(id)) {
    //        console.log("Id", id); 
    //        console.log("completed", data[id]["completed"]); 
    //        console.log("incompleted", data[id]["total"]-data[id]["completed"]);  
    //        console.log("total", data[id]["total"]);    
    //     }
    // }
  })
}


}
