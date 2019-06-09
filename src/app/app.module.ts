import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightDirective } from './highlight.directive';
import { UppercasePipe } from './uppercase.pipe';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    UppercasePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
