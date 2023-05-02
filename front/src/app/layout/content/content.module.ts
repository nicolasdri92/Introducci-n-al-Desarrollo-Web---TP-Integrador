import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [SharedModule, ContentRoutingModule],
})
export class ContentModule {}
