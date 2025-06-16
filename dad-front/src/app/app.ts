import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ApiService} from './core/services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'dad-front';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCategory().subscribe(response => {
      console.log(response);
    });
  }
}
