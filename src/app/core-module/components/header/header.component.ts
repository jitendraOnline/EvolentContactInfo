import { Component, OnInit } from '@angular/core';
import { AppMenus } from '../../model/app-menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  viewProviders:[AppMenus]
})
export class HeaderComponent implements OnInit {

  private role:string='Admin';
  menuBar;
  constructor(private app:AppMenus) { 

  }


  ngOnInit() {
    this.menuBar=this.app.getMenus(this.role);
  }

  login(){};
  logout(){};
}
