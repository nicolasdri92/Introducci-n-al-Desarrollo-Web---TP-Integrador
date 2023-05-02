import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '@layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    loadChildren: () =>
      import('@layout/content/content.module').then((m) => m.ContentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
