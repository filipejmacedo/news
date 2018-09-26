import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() {
    if(localStorage.getItem('fav') === null){
      localStorage.setItem('fav', JSON.stringify([]));
    }
  }

  getMyFavs() {
    return JSON.parse(localStorage.getItem('fav'));
  }

  saveFav(item) {
    let tempItens = this.getMyFavs();
    let add = true;
    if (tempItens.length > 0) {
      tempItens.forEach((element, idx) => {
        if(element.item.title === item.title) {
          tempItens.splice(idx, 1);
          add = false;
        }
      });
      if (add) {
        tempItens.push({item: item});
      }
    } else {
      tempItens = [{item: item}];
    }
    localStorage.setItem('fav', JSON.stringify(tempItens));
  }
}
