import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Espire';

    constructor(private translateSrv: TranslateService){
        this.translateSrv.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translateSrv.use('en');
    }
}
