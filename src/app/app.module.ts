import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { UserComponent } from './components/user/user.component';
import { FeedItemComponent } from './components/common/feed-item/feed-item.component';
import { SuggestItemComponent } from './components/common/suggest-item/suggest-item.component';
import { SearchBarComponent } from './components/common/search-bar/search-bar.component';
import { SuggestListComponent } from './components/suggest-list/suggest-list.component';
import { PostActivityComponent } from './components/post-activity/post-activity.component';
import { UserItemComponent } from './components/common/user-item/user-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FeedsComponent,
    UserComponent,
    FeedItemComponent,
    SuggestItemComponent,
    SearchBarComponent,
    SuggestListComponent,
    PostActivityComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
