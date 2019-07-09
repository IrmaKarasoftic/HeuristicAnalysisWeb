import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { tap } from 'rxjs/operators';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { DiagramsService } from 'src/app/core/services/diagrams.service';

@Component({
  selector: 'app-version-diagrams',
  templateUrl: './version-diagrams.component.html',
  styleUrls: ['./version-diagrams.component.scss'],
})
export class VersionDiagramsComponent implements OnInit {
  urlParams: any;

  LineChart: Chart;
  data: any = {
    Answers: null,
    DiagramModel: null,
  };
  constructor(
    public applicationService: ApplicationsService,
    private diagramsService: DiagramsService,
    private route: ActivatedRoute
  ) {}
  public applications: Array<any> = [];
  ngOnInit() {
    this.route.params.pipe(tap(params => (this.urlParams = params))).subscribe(() => {
      const versionId = Number(this.urlParams.id);
      this.diagramsService.getDiagramsByVersionId(versionId).subscribe(
        res => {
          this.data = res;
          this.LineChart = new Chart('pieChart', {
            type: 'pie',
            data: {
              labels: ['High', 'Medium', 'Low'],
              datasets: [
                {
                  label: 'Severity',
                  data: [
                    this.data.DiagramModel.HighLevel,
                    this.data.DiagramModel.MediumLevel,
                    this.data.DiagramModel.LowLevel,
                  ],
                  backgroundColor: ['#CC0000', '#FF8800', '#0099CC'],
                },
              ],
            },
            options: {
              title: {
                text: 'Pie Chart',
                display: true,
              },
            },
          });
        },
        (err: any) => {
          if (err.errors) {
            console.log(err.errors[0]);
          } else if (err.hasError) {
            console.log(err.message);
          }
        }
      );
    });
  }

  getDiagramsByVersionId() {}
}
