import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dataintel',
  templateUrl: './dataintel.component.html',
  styleUrls: ['./dataintel.component.css']
})
export class DataintelComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute,  private http: Http) { }
  datas = [];
  mydataob: object = {};
  dataint: object = {};
  idx: number;
  private head = new Headers({ 'Content-Type' : 'application/json'});

  datainf = new FormGroup ({
    name : new FormControl(),
    age : new FormControl()
  });

  getdata() {
    this.http.get('http://localhost:5555/mydatafile').subscribe(
      (res: Response) => {
        this.datas = res.json();
        this.route.params.subscribe(params => {
        this.idx = +params['id'];
        for (let i = 0; i < this.datas.length; i++) {
          if ( parseInt(this.datas[i].id, 10) === this.idx ) {
            this.dataint = this.datas[i];
            this.datainf.value.name = this.datas[i].name;
            this.datainf.value.age = this.datas[i].age;
            break;
          }
        }
      });
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
    const url = `${'http://localhost:5555/mydatafile'}/${this.idx}`;
    this.http.put(url, JSON.stringify(this.mydataob), {headers: this.head}).toPromise()
    .then(() => {
      this.getdata();
      this.router.navigate(['/']);
    });
  }

}
