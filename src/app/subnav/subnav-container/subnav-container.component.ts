import {
  Component,
  ContentChild,
  OnInit,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { SubnavPinnedComponent } from '../subnav-pinned/subnav-pinned.component';

@Component({
  selector: 'app-subnav-container',
  templateUrl: './subnav-container.component.html',
  host: {
    class: 'subnav-container',
  },
  styleUrls: ['./subnav-container.component.scss'],
})
export class SubnavContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(SubnavPinnedComponent) pinnedComponent!: SubnavPinnedComponent;

  constructor() {}

  ngAfterContentInit() {
    // contentChild is set
    console.log(this.pinnedComponent);
  }
  ngOnInit(): void {}
}
