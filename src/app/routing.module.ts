import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    }, {
        path: 'home', component: HomeComponent
    }, {
        path: 'login', component: LoginComponent
    }, {
        path: 'signup', component: SignupComponent
    }, {
        path: 'login-email', component: EmailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
