import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TopicDetailsComponent} from "./topic-details.component/topic-details.component";

@NgModule({
    imports:[RouterModule.forChild([
        {path:'details/:id', component:TopicDetailsComponent}
    ])
    ],
    exports:[RouterModule]
})
export class DetailsRoutingModule{
    
}