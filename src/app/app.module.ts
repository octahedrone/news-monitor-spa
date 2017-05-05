import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component/app.component';
import {RouterModule} from '@angular/router'

//modules
import{HomeModule} from './home.module/home.module'
import {EditModule} from "./edit.module/edit.module";
import {FormsModule} from "@angular/forms";
import {DetailsModule} from "./details.module/details.module";

@NgModule({
    imports:      [ RouterModule.forRoot([
        {path:'', redirectTo:'/home', pathMatch:'full'}
    ]),
        BrowserModule,HomeModule,EditModule,FormsModule,DetailsModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent]
})
export class AppModule {

}