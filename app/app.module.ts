import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component/app.component';
import {RouterModule} from '@angular/router'

//modules
import{HomeModule} from './home.module/home.module'
import {EditModule} from "./edit.module/edit.module";

@NgModule({
    imports:      [ RouterModule.forRoot([
        {path:'', redirectTo:'/home', pathMatch:'full'}
    ]),
        BrowserModule, FormsModule,HomeModule,EditModule ],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}