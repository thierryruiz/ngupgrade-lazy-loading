import {Injectable} from '@angular/core' ;
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private ready : BehaviorSubject<boolean>;

  constructor(){
    this.ready = new BehaviorSubject<boolean>(false) ;
  }

  setReady () {
    this.ready.next(true) ;
  }

  ready$() : Observable<boolean> {
    return this.ready ;   
  } 


}