import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  constructor() { }

  showModal(isModalOpen : boolean){
    return !isModalOpen;
  }

}
