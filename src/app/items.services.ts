import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemsServices{
    private url: string = "../assets/data/items1.json";
    constructor(private localHttp: Http){}
    getItems(){
        return this.localHttp.get(this.url)
         .map((localResponse: Response) => localResponse.json());
    }
}