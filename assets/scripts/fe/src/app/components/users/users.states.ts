import { ContentOnly, NavigationContent } from '../../commons/utils/layout.utils';
import { LoginRequired, Disconnect } from '../../commons/utils/security.utils';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


export const USERS_STATES : Object[] = [
  {
    name  : 'login',
    url   : '/login/',
    views : ContentOnly(LoginComponent)
  },
  {
    name   : 'logout',
    url    : '/logout/',
    onEnter: Disconnect
  },
  {
    name   : 'dashboard',
    url    : '/dashboard/',
    views  : NavigationContent(DashboardComponent),
    onEnter: LoginRequired
  },
  {
    name   : 'profile',
    url    : '/profile/',
    views  : NavigationContent(ProfileComponent),
    onEnter: LoginRequired
  }
]