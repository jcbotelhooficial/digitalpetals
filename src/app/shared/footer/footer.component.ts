import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public optionsFooter: Array<object>;

  constructor(private menuService: MenuService) {
    this.optionsFooter = menuService.getMenuFooter();
  }

  ngOnInit() {
  }

}
