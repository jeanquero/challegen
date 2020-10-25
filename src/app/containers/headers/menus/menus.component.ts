import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import { CustomHttpService } from 'src/app/service/custom-http.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private customHttp: CustomHttpService) { }


  post = [];
  ngOnInit() {
  }

  async getPost() {
    
    const pro: any = await this.customHttp.get('/posts', []).toPromise();
    this.post = pro;
  }

}
