import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory.component';
import { NewDirectoryComponent } from './new-directory/new-directory.component';

const routes: Routes = [{path:'',component: DirectoryComponent},
  {path:'new-directory',loadChildren: ()=> import ('./new-directory/new-directory.module').then(m => m.NewDirectoryModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
