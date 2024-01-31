import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() texteUser = new EventEmitter<string>();

  ngOnInit(): void {

  }

  chercherPlant(event: any) {
    const inputContent = event.target.value;
    this.texteUser.emit(inputContent);
  }

}
