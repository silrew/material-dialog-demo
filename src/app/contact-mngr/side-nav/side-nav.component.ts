import { Component, OnInit , HostListener, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ScreenSizeService } from 'src/app/shared/screen-size.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
showFiller = false;
isScreenSmall: boolean;
user$: Observable<User[]>;
isDarkTheme: boolean = false;
  dir: string = 'ltr';
images = ["https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w",
"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60 100w",
"https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w",
"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w" ]
@ViewChild(MatDrawer) drawer: MatDrawer;
@HostListener('window:resize') onresize() {
  this.isScreenSmall= this.service.isScreenSmall();
}
  constructor(private service: ScreenSizeService,
    private cd: ChangeDetectorRef, private userservice: UserService, private route: Router) { }

  ngOnInit(): void {
    this.isScreenSmall = this.service.isScreenSmall();
    this.userservice.loadAll();
    this.user$ = this.userservice.users; this.user$.subscribe(data =>{ console.log(data);
    });
    this.route.events.subscribe(data => {
      if (this.isScreenSmall) this.drawer.close();
    })
    
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
    this.drawer.toggle().then(() => this.drawer.toggle());
  }

}
