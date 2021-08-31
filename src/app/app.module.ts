import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { UpdateblogComponent } from './updateblog/updateblog.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogserviceService } from './blogservice.service';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    CreateblogComponent,
    UpdateblogComponent,
    ProfileComponent,
    DisplayblogComponent,
    CreateProfileComponent,
    ProfileListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BlogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
