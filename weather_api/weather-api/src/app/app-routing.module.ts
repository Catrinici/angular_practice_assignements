import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";


const routes: Routes = [
	{ path: 'seattle', component: SeattleComponent },
	{ path: 'sanjose', component: SanjoseComponent },
	{ path: '', component: SeattleComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
