import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInfo: any;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUserData().then(data => this.userInfo = data);
  }

}
