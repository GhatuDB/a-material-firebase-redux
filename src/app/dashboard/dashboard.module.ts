import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
// Ngrx added
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./reducers/post.reducer";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    StoreModule.forRoot({post: postReducer})
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
