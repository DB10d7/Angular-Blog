import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateblogComponent } from './updateblog/updateblog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';


const routes: Routes = [
  {
    component: BloglistComponent,
    path: 'blog'
  },
  {
    component: CreateblogComponent,
    path: 'blog/add'
  },
  {
    component: ProfileListComponent,
    path: 'profile'
  },
  {
    component: CreateProfileComponent,
    path: 'profile/add'
  },
  {
    component: ProfileComponent,
    path: 'profile/:id'
  },
  {
    component: UpdateblogComponent,
    path: 'blog/update/:id'
  },
  {
    component: DisplayblogComponent,
    path: 'blog/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
