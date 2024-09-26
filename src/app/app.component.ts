import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { IonButtons, IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicSharedModule } from './modules/ionic-shared/ionic-shared.module';
import { LoginComponent } from "./components/auth/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NavItem } from 'src/constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicSharedModule, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDashboard: boolean = false;
  isLoginPage:boolean = false;
  pageTitle: string = 'Milk Men'; // Default title
  navItems : NavItem[] = [
    { label: 'Dashboard', link: '/dashboard', icon : 'grid-outline' },
    { label: 'Extra Features', link: '/features', icon : 'options-outline' },
    { label: 'My Subscription', link: '/subscription', icon : 'document-text-outline' },
    { label: 'Rate Us', link: '/rateus', icon : 'star-outline' },
    { label: 'Logout', action: this.logout.bind(this), icon : 'log-out-outline' }
  ];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data['title'])
    )
    .subscribe((data: string) => {
      this.isDashboard = data == 'Dashboard';
      this.isLoginPage = data == "Login";
      this.pageTitle = data || 'Milk Men'; // Fallback title
    });

  }

  close(){
    
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
