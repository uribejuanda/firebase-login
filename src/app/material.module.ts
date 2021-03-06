import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ],
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {
}
