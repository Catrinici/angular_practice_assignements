import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
	declarations: [
		AppComponent,
		SeattleComponent,
		SanjoseComponent,
		HttpClientModule,
		HttpClient
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [HttpService],
	bootstrap: [AppComponent]
})
export class AppModule { }
