import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  datas = [];

  datainf = new FormGroup ({
    name : new FormControl(null),
    age : new FormControl(null)
  });

  mydataob: object = {};
  idx: number;
  private head = new Headers({ 'Content-Type' : 'application/json'});

  getdata() {
    this.http.get('http://localhost:5555/mydatafile').subscribe(
      (res: Response) => {
        this.datas = res.json();
      });
  }
  ngOnInit() {
    this.getdata();
  }

  adddata() {
    this.mydataob = {
      'name': this.datainf.value.name,
      'age': this.datainf.value.age
    };
    this.http.post('http://localhost:5555/mydatafile/', this.mydataob).subscribe(
      (res: Response) => {
        this.getdata();
        console.log(res);
      }
    );
  }

  dataremove(id) {
    if (confirm('are you sure?')) {
      const url = `${'http://localhost:5555/mydatafile'}/${id}`;
      return this.http.delete(url, {headers: this.head}).toPromise()
      .then(() => {
        this.getdata();
      });
    }
  }

}
