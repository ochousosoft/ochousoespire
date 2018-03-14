import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//Layout Modules
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

//Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar_Directives } from './shared/directives/side-nav.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';

import { AuthGuard } from './guards/index';
import { AlertService } from './providers/alert.service';
import { AuthenticationService } from './providers/authentication.service';
import { UserService } from './providers/user.service';
//Rest Services
import { Constants } from './providers/config/constants';
import { LoginRestService } from './providers/rest/login-rest.service';
import { PostsRestService } from './providers/rest/posts-rest.service';
import { CategoriesRestService } from './providers/rest/categories-rest.service';

import { SessionUserMem } from './providers/memory/session-user.memory';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        NgbModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FormsModule,
        HttpModule,
        PerfectScrollbarModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        Sidebar_Directives
    ],
    providers: [
        AuthGuard,
        Constants,
        AlertService,
        AuthenticationService,
        UserService,
        LoginRestService,
        PostsRestService,
        CategoriesRestService,

        SessionUserMem
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }
