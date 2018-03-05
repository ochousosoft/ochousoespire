import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsRoutes } from './forms.routing';
import { NgSelectizeModule } from 'ng-selectize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { FormWizardModule } from 'angular2-wizard';

//Forms Component
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormWizard_Component } from './form-wizard/form-wizard.component';

@NgModule({
    imports: [
        RouterModule.forChild(FormsRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgSelectizeModule,
        NgbModule,
        CustomFormsModule,
        FormWizardModule
    ],
    declarations: [
        FormElementsComponent,
        FormLayoutsComponent,
        FormWizard_Component
    ]
})
export class Forms_Module { }