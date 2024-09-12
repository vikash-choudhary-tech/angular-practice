import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrl: './modal-test.component.scss'
})
export class ModalTestComponent {
  constructor(private modalService : ModalService){}
  closeModal(){
    this.modalService.showModal(false);
  }
}
