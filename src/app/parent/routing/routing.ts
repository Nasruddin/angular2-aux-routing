import { RouterModule, Routes }  from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
 
export const routes: Routes = [
    { path: '', component: AComponent },
    { path: 'a', component: AComponent },
    { path: 'b', component: BComponent }
];


