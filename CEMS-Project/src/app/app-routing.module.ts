import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';
import { Role } from './_models';

import { HomeComponent } from './home/home.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { StudentOrgAppFormComponent } from './student-org-app-form/student-org-app-form.component';
import { EduProfileManagementComponent } from './edu-profile-management/edu-profile-management.component';
import { StaffProfileManagementComponent } from './staff-profile-management/staff-profile-management.component';
import { JodDetailAnnouncementComponent } from './jod-detail-announcement/jod-detail-announcement.component';
import { StuQualificationcementComponent } from './stu-qualificationcement/stu-qualificationcement.component';
import { StuQualifyingStatusComponent } from './stu-qualifying-status/stu-qualifying-status.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { NewAccountComponent } from './new-account/new-account.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'index', component: MainscreenComponent },
  { path : 'login', component: LogInComponent },
  { path : 'sign-up', component: SignUpComponent },
  { path : 'app-form', component: StudentOrgAppFormComponent,canActivate: [AuthGuard] },
  { path : 'profile-management/stu', component: EduProfileManagementComponent,canActivate: [AuthGuard], data: { roles: [Role.User]} },
  { path : 'profile-management/staff', component: StaffProfileManagementComponent, canActivate: [AuthGuard], data: { roles: [Role.Staff,Role.Admin]} },
  { path : 'announcement', component: JodDetailAnnouncementComponent},
  { path : 'qualification', component: StuQualificationcementComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin,Role.Staff,Role.Agent]} },
  { path : 'qualifying', component: StuQualifyingStatusComponent},
  { path : 'UserManual', component: UserManualComponent },
  { path : 'new-account', component: NewAccountComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin,Role.Staff]} },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
