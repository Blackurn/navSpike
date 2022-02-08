import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { SubnavModule } from '../subnav/subnav.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, ClientRoutingModule, SubnavModule, MatTabsModule],
})
export class ClientModule {}
