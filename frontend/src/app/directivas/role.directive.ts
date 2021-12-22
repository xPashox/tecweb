import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {
  private currentUserRol: number;
  private roles: Array<number>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private api: ApiService
  ) 
  { 
    this.currentUserRol = 0;
    this.roles = [];
  }

  ngOnInit(): void {
    this.currentUserRol = this.api.getCurrentUser().rol;
    this.updateView();
  }

  @Input()
  set appRole(val: Array<number>) {
    this.roles = val;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    for(const rol of this.roles){
      if(this.currentUserRol == rol){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

}
