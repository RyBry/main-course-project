import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() displayLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitLink(linkName : string){
    this.displayLink.emit(linkName);
    console.log("it's {{linkName}} time");
  }

}
