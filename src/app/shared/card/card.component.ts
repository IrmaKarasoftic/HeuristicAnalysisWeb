import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() item: any;
  @Input() flipped: boolean;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onVersionCreate = new EventEmitter<any>();
  @Output() onVersionEdit = new EventEmitter<any>();
  @Output() onVersionDelete = new EventEmitter<any>();

  ngOnInit() {}
  edit(item: any) {
    console.log(item);
    this.onEdit.emit(item);
  }
  delete(item: any) {
    console.log(item);
    this.onDelete.emit(item);
  }
  createVersion(app) {
    console.log();
    this.onVersionCreate.emit(app);
  }
  editVersion(item: any) {
    console.log(item);
    this.onVersionEdit.emit(item);
  }
  deleteVersion(item: any) {
    console.log(item);
    this.onVersionDelete.emit(item);
  }
  flipIt() {
    this.flipped = !this.flipped;
  }
}
