import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { HeuristicService } from '../../core/services/heuristics.service';

@Component({
  selector: 'app-heuristics',
  templateUrl: './heuristicsmanager.component.html',
  styleUrls: ['./heuristicsmanager.component.css']
})
export class HeuristicsComponent implements OnInit {
  @ViewChild('CreateHeuristicDialog') public createHeuristicDialog: DialogComponent;
  @ViewChild('UpdateHeuristicDialog') public updateHeuristicDialog: DialogComponent;
  @ViewChild('DeleteHeuristicDialog') public deleteHeuristicDialog: DialogComponent;
  constructor(private heuristicService: HeuristicService) { }
  defaultSelectedHeuristic: any = {
    Id: null,
    HeuristicText: '',
    HeuristicTitle: ''
  };
  selectedHeuristic: any = {
    Id: null,
    HeuristicText: '',
    HeuristicTitle: ''
  };
  public heuristics: Array<string> = [];
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.heuristicService.searchHeuristics()
      .subscribe(
        (res) => {
          this.heuristics = res;
          this.setSelectedHeuristicToDefault()
        },
        (err: any) => {
          if (err.errors) {
            console.log(err.errors[0]);
          } else if (err.hasError) {
            console.log(err.message);
          }
        }
      );
  }

  setSelectedHeuristicToDefault(): any {
    this.selectedHeuristic = JSON.parse(JSON.stringify(this.defaultSelectedHeuristic));
  }
  
  createHeuristic() {
    this.heuristicService.createHeuristic(this.selectedHeuristic).subscribe(
      (res) => {
        this.getAll();
        this.closeCreateHeuristicDialog();        
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeCreateHeuristicDialog();        
      }
    );
  }


  updateHeuristic() {
    this.heuristicService.updateHeuristic(this.selectedHeuristic).subscribe(
      (res) => {
        this.getAll();
        this.closeUpdateHeuristicDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeUpdateHeuristicDialog();
      }
    );
  }

  deleteHeuristic() {
    this.heuristicService.deleteHeuristic(this.selectedHeuristic.Id).subscribe(
      (res) => {
        this.getAll();
        this.closeDeleteHeuristicDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeDeleteHeuristicDialog();
      }
    );
  }

  openCreateHeuristicDialog() {
    this.setSelectedHeuristicToDefault()
    this.createHeuristicDialog.show();
  }

  openUpdateHeuristicDialog(heuristic: any) {
    this.selectedHeuristic = JSON.parse(JSON.stringify(heuristic));
    this.updateHeuristicDialog.show();
  }

  openDeleteHeuristicDialog(heuristic) {
    this.selectedHeuristic = heuristic;
    this.deleteHeuristicDialog.show();
  }

  closeCreateHeuristicDialog() {
    this.createHeuristicDialog.hide();
    this.setSelectedHeuristicToDefault()
  }

  closeUpdateHeuristicDialog() {
    this.updateHeuristicDialog.hide();
    this.setSelectedHeuristicToDefault()
  }

  closeDeleteHeuristicDialog() {
    this.deleteHeuristicDialog.hide();
    this.setSelectedHeuristicToDefault()
  }
}
