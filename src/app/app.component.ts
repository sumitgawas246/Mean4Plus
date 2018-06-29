import { Component, OnInit  } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  ExpenseData: Array<any>;
  data: any;

  constructor(private _dataService: DataService, private httpService: HttpClient, private _http: Http ) {

    // this._dataService.getUsers()
    //   .subscribe(res => this.EmpExpenseData = res);

      

  }

  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['Rent', 'Maid', 'Travelling', 'Investment', 'Grocessary','PersonalExpense'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)',
        'rgba(255, 20, 0, 0.9)'
        ]
    }
]
  ngOnInit () {
    this._dataService.getUsers().subscribe(
        data => {

            this.ExpenseData=data;
            this.pieChartData = [data[0].Rent,data[0].Maid,data[0].Travelling,data[0].Investment,data[0].Grocessary,data[0].PersonalExpense,];	 // FILL THE CHART ARRAY WITH DATA.
        }
    );
}
public pieChartData: any[]=[];

onChartClick(event) {
    console.log(event);
}

}
