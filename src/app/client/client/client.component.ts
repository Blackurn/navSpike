import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  links = ['#100', '#101', '#102'];
  titles = ['Tab A', 'Tab B', 'Tab C'];
  activeLink = this.links[1];
  myColor = 'primary';
  constructor() {}

  ngOnInit(): void {}
}
