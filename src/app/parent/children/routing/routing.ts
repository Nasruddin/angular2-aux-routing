import { Routes, RouterModule } from '@angular/router';

import { CAComponent } from '../ca/ca.component';
import { CBComponent } from '../cb/cb.component';

export const routes: Routes = [
    { path: '', component: CAComponent, outlet: 'childOutlet' },
    { path: 'ca', component: CAComponent, outlet: 'childOutlet' },
    { path: 'cb', component: CBComponent, outlet: 'childOutlet' }
]

export const importedRoutes = [CAComponent, CBComponent];