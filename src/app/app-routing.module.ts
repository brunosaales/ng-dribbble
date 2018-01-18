import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShotsComponent }   from './shots/shots.component';

const routes: Routes = [
  { path: '', redirectTo: '/shots', pathMatch: 'full' },
  { path: 'shots', component: ShotsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
