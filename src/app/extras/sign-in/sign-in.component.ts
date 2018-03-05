import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService, AuthenticationService } from '../../providers/index';

@Component ({
    templateUrl: 'sign-in.html'
})

export class SignInComponent {
    model: any = {};
    loading = false;
    returnUrl: string;
    incorrectCredentials = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        debugger
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.incorrectCredentials = false;
                    // this.router.navigate(['dashboard']);
                    this.router.navigate(['dashboard']);
                },
                error => {
                    this.incorrectCredentials = true;
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}