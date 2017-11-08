import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [
		//angular modules
		BrowserModule,
		CommonModule,
		//custom modules
		PassengerDashboardModule
	]
})
export class AppModule {}
