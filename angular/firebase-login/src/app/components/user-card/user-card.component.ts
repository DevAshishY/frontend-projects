import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
@Input() user:any;

// child to parent Data
@Output() childToparent = new EventEmitter<string>();
addNewItem(value: string) {
  this.childToparent.emit(value);
}


  constructor() { }

  ngOnInit(): void {
    console.log("aaaaaa",this.user)
  }

}
