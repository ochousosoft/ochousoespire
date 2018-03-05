import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppsRoutes } from './apps.routing';
import { MomentModule } from 'angular2-moment';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgSelectizeModule } from 'ng-selectize';

// Apps Components
import { SocialComponent } from './social/social.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailComponent } from './email/email.component';
import { EmailInboxComponent } from './email/email-inbox.component';
import { EmailComposeComponent } from './email/email-compose.component';

// Services
import { EmailService } from './email/email.services';


@NgModule({
    imports: [
        RouterModule.forChild(AppsRoutes),
        CommonModule,
        FormsModule,
        MomentModule,
        CalendarModule,
        PerfectScrollbarModule,
        HttpModule,
        NgSelectizeModule
    ],
    declarations: [
        SocialComponent,
        CalendarComponent,
        EmailComponent,
        EmailInboxComponent,
        EmailComposeComponent
    ],
    providers: [
        EmailService
    ]
})
export class AppsModule { }
