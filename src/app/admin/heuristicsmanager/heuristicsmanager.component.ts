import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { HeuristicService } from '../../core/services/heuristics.service';

@Component({
  selector: 'app-heuristics',
  templateUrl: './heuristicsmanager.component.html',
  styleUrls: ['./heuristicsmanager.component.css']
})
export class HeuristicsComponent implements OnInit {
  @ViewChild('UpdateHeuristicDialog') public updateHeuristicDialog: DialogComponent;
  @ViewChild('DeleteHeuristicDialog') public deleteHeuristicDialog: DialogComponent;
  selectedHeuristic: any;
  constructor(private heuristicService: HeuristicService) { }
  defaultSelectedHeuristic: any = {
    Id: null,
    HeuristicText: ''
  };
  public heuristics: Array<string> = [];
  ngOnInit() {
    this.heuristicService.searchHeuristics()
      .subscribe(
        (res) => {
          this.heuristics = res;
          this.selectedHeuristic = this.defaultSelectedHeuristic;
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

  updateHeuristic() {
    this.heuristicService.updateHeuristic(this.selectedHeuristic).subscribe(
      (res) => {
        this.updateHeuristicDialog.hide();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.updateHeuristicDialog.hide();

      }
    );
  }

  deleteHeuristic() {
    this.heuristicService.deleteHeuristic(this.selectedHeuristic.Id).subscribe(
      (res) => {
        this.updateHeuristicDialog.hide();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.updateHeuristicDialog.hide();
      }
    );
  }

  openUpdateHeuristicDialog(heuristic: any) {
    this.selectedHeuristic = heuristic;
    this.updateHeuristicDialog.show();
  }

  closeUpdateHeuristicDialog() {
    this.updateHeuristicDialog.hide();
    this.selectedHeuristic = this.defaultSelectedHeuristic;
  }

  openDeleteHeuristicDialog(heuristic) {
    this.selectedHeuristic = heuristic;
    this.deleteHeuristicDialog.show();
  }

  closeDeleteHeuristicDialog() {
    this.deleteHeuristicDialog.hide();
    this.selectedHeuristic = this.defaultSelectedHeuristic;
  }
}
