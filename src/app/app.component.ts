import { Component, OnInit } from '@angular/core';
import { ItemsServices } from './items.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ItemsServices]
})
export class AppComponent implements OnInit {
  items = [];
  menu_list = [];
  selected_menu_item = []
  constructor (private localItems: ItemsServices){}
  ngOnInit(){
     console.log("empty" + this.items);
    this.localItems.getItems().subscribe(resItems => {
      this.items = resItems
      console.log("at subscribe" + this.items)
    });
    console.log("after assign" + this.items)
    Object.keys(this.items).map((keys)=>{
      Object.keys(this.items[keys]).map((key) => {
        this.menu_list.push(key);
      })
      
    })
        
    this.selectedMenuItem(this.menu_list[0]);
  }
  
  selectedMenuItem(a) {
    this.selected_menu_item = []
    Object.keys(this.items).map((keys)=>{
      Object.keys(this.items[keys]).map((key) => {
        if(a === key) {
          Object.keys(this.items[keys][key]).map((k) => {
          this.selected_menu_item.push(this.items[keys][key][k])
        })
        }
      })
    })
    console.log(this.selected_menu_item)
  }
}
