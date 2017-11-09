import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
	declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
	imports: [CommonModule],
	exports: [PassengerDashboardComponent] //PassengerCountComponent and PassentgerDetailComponent don't need to be exported since app.component.ts only uses the passenger dashboard component
})
export class PassengerDashboardModule {}
