import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ToastyModule } from 'ng2-toasty';

import { Cards_Directives } from '../shared/directives/cards.directive';

import { WikiRoutes } from './wiki.routing';
import { NgSelectizeModule } from 'ng-selectize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { FormWizardModule } from 'angular2-wizard';

//Forms Component
import { WikiDashboardComponent } from './wiki-dashboard/wiki-dashboard.component';
import { WikiPostComponent } from './wiki-post/wiki-post.component';

@NgModule({
    imports: [
        RouterModule.forChild(WikiRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgSelectizeModule,
        NgbModule,
        CustomFormsModule,
        FormWizardModule,
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),
        ToastyModule
    ],
    declarations: [
        WikiDashboardComponent,
        WikiPostComponent,
        Cards_Directives
    ]
})
export class Wiki_Module { }