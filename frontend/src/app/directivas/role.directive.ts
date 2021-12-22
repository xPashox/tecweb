import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {
  private currentUserRol: number;
  private rol: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private api: ApiService
  ) 
  { 
    this.currentUserRol = 0;
    this.rol = -1;
  }

  ngOnInit(): void {
    this.currentUserRol = this.api.getCurrentUser().rol;
    this.updateView();
  }

  @Input()
  set appRole(val: number) {
    this.rol = val;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    if(this.currentUserRol == this.rol){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
