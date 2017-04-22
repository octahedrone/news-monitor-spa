import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {TopicsSearchComponent} from './topics-search.component/topics-search.component'

@NgModule({
    imports:[
        RouterModule.forChild([
            {path:'home', component:TopicsSearchComponent}
        ])
    ],
    exports:[RouterModule]
})
export class HomeRoutingModule{

}