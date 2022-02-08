import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubnavContainerComponent } from './subnav-container/subnav-container.component';
import { SubnavSearchComponent } from './subnav-search/subnav-search.component';
import { SubnavPinnedComponent } from './subnav-pinned/subnav-pinned.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SubnavContentComponent } from './subnav-content/subnav-content.component';
import { SharedModule } from '../shared/shared.module';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SubnavContainerComponent,
    SubnavSearchComponent,
    SubnavPinnedComponent,
    SubnavContentComponent,
  ],

  imports: [
    SharedModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    // AppRoutingModule,
  ],
  exports: [
    SubnavContainerComponent,
    SubnavSearchComponent,
    SubnavPinnedComponent,
    SubnavContentComponent,
  ],
})
export class SubnavModule {}
