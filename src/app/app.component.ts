import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '../assets/nicepage.css']
})
export class AppComponent implements OnInit{
  title = 'DPE';
  
  datarray: any [] =[];
  dataobj : any = {};

 
  constructor(public apiService: ApiService, nicepage:CargarScriptsService, jquery:CargarScriptsService, timer:CargarScriptsService ){
    jquery.carga(['jquery']) , timer.carga(['timer']), nicepage.carga(['nicepage']);}

    ngOnInit(): void {
      this.llenarData();
    }
  
    llenarData(){
      this.apiService.getData().subscribe(datarray =>{
        this.datarray = datarray;
        console.log(this.datarray);
      })
  
    }
  }
