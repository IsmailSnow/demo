
import { OnInit } from '@angular/core';
import { History } from './history';

export class PageHistory {
    content : History[];
    totalPages : number;
    totalElements : number;
    last : boolean;
    size : number;
    first : boolean;
    sort : string;
    numberOfElements : number;

}