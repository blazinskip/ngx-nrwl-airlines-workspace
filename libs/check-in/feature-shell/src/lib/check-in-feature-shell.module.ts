import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInDataAccessModule } from '@nrwl-airlines/check-in/data-access';
import { SharedDataAccessModule } from '@nrwl-airlines/shared/data-access';

import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'seatmap',
      },
      {
        path: 'seatmap',
        loadChildren: () =>
          import('@nrwl-airlines/seatmap/feature-seat-listing')
            .then(esModule => esModule.SeatmapFeatureSeatListingModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    SharedDataAccessModule,
    CheckInDataAccessModule,
  ],
})
export class CheckInFeatureShellModule { }
