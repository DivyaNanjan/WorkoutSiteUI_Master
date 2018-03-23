import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertService } from '../alert.service';
import { DataServiceService } from '../data-service.service';
import { UserDataService } from '../user-data.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  user: any = {};
  loading = false;
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private dataService: DataServiceService,
    private userDataService: UserDataService
   ) { }

   ngOnInit() {
   }
  login(user) {
    console.log("Inside User comp"+ user.emailId)
    this.loading = true;
    this.loginService.login(this.user.emailId, this.user.password)
        .subscribe(
            data => {
              console.log("**data"+JSON.stringify(data)) 
              console.log("**data"+JSON.stringify(data.userId))
              this.userDataService.userId =data.userId;
              

               this.router.navigate(['workoutList']);
            },
            error => {
              console.log("**data"+JSON.stringify(error))
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }

}
