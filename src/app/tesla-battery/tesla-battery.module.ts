import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { BatteryService } from './tesla-battery.service';
// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

@NgModule({
  declarations: [
    // registering our container component
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent,
    TeslaWheelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    // exporting so our root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
