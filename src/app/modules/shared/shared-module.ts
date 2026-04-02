import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './componets/side-bar/side-bar';
import { HeaderUserComponent } from './componets/header-user/header-user';
import { MediaPlayerComponent } from './componets/media-player/media-player';

@NgModule({
  declarations: [SideBarComponent, HeaderUserComponent, MediaPlayerComponent],
  imports: [CommonModule],
})
export class SharedModule {}
