import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {


  @Input() repoUrl:any;
  repos: any = [];
  constructor(private gitHubService: GithubService) {
    console.log('bbbbbbbbbbb',this.repoUrl)

  }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log('bbbbbbbbbbb',this.repoUrl)
    if (this.repoUrl) {
      this.gitHubService.getRepo(this.repoUrl).subscribe((repos) => {
        this.repos = repos;
      },
        (err) => {
          console.log(err)
        }
      )
    }


  }

}
