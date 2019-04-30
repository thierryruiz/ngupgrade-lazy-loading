import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs' ;
import {LayoutService} from './layout.service' ;


@Injectable()
export class LayoutResolver implements Resolve<boolean> {
  constructor(private layoutService: LayoutService) {}
  resolve(): Observable<boolean> {
    return this.layoutService.ready$() ;
  }
}