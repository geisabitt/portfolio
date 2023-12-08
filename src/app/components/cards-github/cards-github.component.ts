import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.interface';

@Component({
  selector: 'cards-github',
  templateUrl: './cards-github.component.html',
  styleUrls: ['./cards-github.component.scss'],
})
export class CardsGithubComponent implements OnInit {
  repositories$: Observable<Repository[]> | undefined;
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.repositories$ = this.githubService.getRepository();

    this.githubService.getRepository().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
