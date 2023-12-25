import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// child to parent datat
items = ['item1', 'item2', 'item3', 'item4'];
addItem(newItem:any) {
  this.items.push(newItem);
}


  user: any;
  userName: string = '';
  error:any;


  constructor(private _GithubService: GithubService, private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    console.log('aaaaaaaaaaaaaaaaaaa',this.items)
  }
  handleFind() {
    this._GithubService.getUserDetails(this.userName).subscribe((user) => {
      this.user = user;
      this.error = null;
    },
    (err) =>{
      this.user = null;
      this.error = "user not found";

    }

    )
  }

}
