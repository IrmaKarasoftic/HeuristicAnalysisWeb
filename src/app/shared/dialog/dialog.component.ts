import {
    animate,
    style,
    transition,
    trigger
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LoaderService } from './../loader/loader.service';
import { DialogService } from './dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'translateY(100%)' }),
                animate('100ms', style({ transform: 'translateY(0)' }))
            ]),
            transition('* => void', [
                style({ transform: 'translateY(0)' }),
                animate('100ms', style({ transform: 'translateY(100%)' }))
            ])
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

    @Output() submitEvent = new EventEmitter();
    @Output() closeEvent = new EventEmitter();
    @Input() submitButtonLabel: string;
    @Input() closeButtonLabel: string;
    @Input() minusIcon: boolean;
    @Input() submitButtonClass: string;

    visible = false;
    buttonDisabled = false;

    constructor(private dialogService: DialogService) {
    }

    ngOnInit() {
        this.dialogService.visible.subscribe((value) => {
            if (value !== null) {
                this.visible = value;
            }
        });
        if (this.submitButtonClass === undefined || this.submitButtonClass === '') {
            this.submitButtonClass = 'btn btn-primary';
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.buttonDisabled = false;
        this.dialogService.hide();
    }

    isVisible() {
        return this.visible;
    }

    onSubmit() {
        this.submitEvent.emit();
    }

    onClose() {
        this.closeEvent.emit();
    }

    keyDownFunction(event) {
        if (event.keyCode === 13) {
            this.onSubmit();
        }
    }

    updateButton($event) {
        console.log('Setting spinner:', $event);
        this.buttonDisabled = $event;
    }

    hideModal(event) {
        if (event.target === event.currentTarget) {
            this.closeEvent.emit();
        }
    }
}
