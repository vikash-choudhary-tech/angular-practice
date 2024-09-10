import { Component, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';
import { TestComponentComponent } from '../test-component/test-component.component';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrl: './dynamic-component-loader.component.scss'
})
export class DynamicComponentLoaderComponent {
  @ViewChild(PlaceholderDirective, {static : true}) placeholder !: PlaceholderDirective;

  ngOnInit(){
    this.loadComponent();
  }

  loadComponent(){
    const containerRef = this.placeholder.viewContainerRef;
    containerRef.clear();

    const componentRef = containerRef.createComponent(TestComponentComponent);
  }

}
