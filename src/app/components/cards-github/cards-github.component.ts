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
  repositories$!: Observable<Repository[]>;
  displayCards: number = 7;
  constructor(private githubService: GithubService) {}

  viewMore(): void {
    this.displayCards += 5;
  }
  viewBack(): void {
    this.displayCards = 7;
  }

  ngOnInit(): void {
    this.repositories$ = this.githubService.getRepository();

    this.githubService.getRepository().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
