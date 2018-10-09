import { Injectable } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Injectable()
export class LoaderService {

  private spinnerCache = new Set<LoaderComponent>();

  constructor() { }

  _register(spinner: LoaderComponent): void {
    if (this._isRegistered(spinner.name) === false) {
      this.spinnerCache.add(spinner);
    }
  }

  _unregister(spinnerToRemove: LoaderComponent): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner === spinnerToRemove) {
        this.spinnerCache.delete(spinner);
      }
    });
  }

  _isRegistered(spinnerName: string): boolean {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        return true;
      }
    });
    return false;
  }

  show(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = true;
      }
    });
  }

  hide(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = false;
      }
    });
  }

  isShowing(spinnerName: string): boolean | undefined {
    let showing;
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        showing = spinner.show;
      }
    });
    return showing;
  }

}
