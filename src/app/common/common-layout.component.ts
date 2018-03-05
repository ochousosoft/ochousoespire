import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../providers/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './common-layout.component.html'
})

export class CommonLayoutComponent implements OnInit {

    public app : any;
    public headerThemes: any;
    public changeHeader: any;
    public sidenavThemes: any;
    public changeSidenav: any;
    public headerSelected: any;
    public sidenavSelected : any;
    public searchActived : any;

    Auth;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.Auth = authenticationService;

        this.app = {
            layout: {
                sidePanelOpen: false,
                isMenuOpened: true,
                isMenuCollapsed: false,
                themeConfigOpen: false,
                rtlActived: false,
                searchActived: false
            }
        };  

        this.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
        this.changeHeader = changeHeader;
    
        function changeHeader(headerTheme) {
            this.headerSelected = headerTheme;
        }
    
        this.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
        this.changeSidenav = changeSidenav;
    
        function changeSidenav(sidenavTheme) {
            this.sidenavSelected = sidenavTheme;
        }
    }


    ngOnInit(){

    }

    logOut(){
        debugger
        this.authenticationService.destroySession();
        this.router.navigate(['authentication', 'sign-in']);
    }
}
