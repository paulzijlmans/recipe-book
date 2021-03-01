import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
