import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSharedModule } from 'src/app/modules/ionic-shared/ionic-shared.module';
import { MenuItem } from 'src/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports:[IonicSharedModule],
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
  menuItems : MenuItem[] = []
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
   this.loadMenuItems();
  }

  private loadMenuItems(): void {
    this.http.get<MenuItem[]>('assets/menu-items.json').subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Failed to load menu items', err);
      }
    });
  }
  
  goToSection(path : any) {
    path = `menu/${path}`;
    this.router.navigate([path]);
  }

}
