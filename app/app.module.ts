import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component/app.component';
import {RouterModule} from '@angular/router'

//modules
import{HomeModule} from './home.module/home.module'

@NgModule({
    imports:      [ RouterModule.forRoot([
        {path:'', redirectTo:'/home', pathMatch:'full'}
    ]),
        BrowserModule, FormsModule,HomeModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}