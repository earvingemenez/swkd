import { AuthService } from '../services/auth/auth.service';


export function LoginRequired (t) {
  let auth = t.injector().get(AuthService);
  let state = t.router.stateService;

  if (!auth.authenticated()) { return state.target('login') }
}

export function Disconnect (t) {
  let auth = t.injector().get(AuthService);
  let state = t.router.stateService;

  if(auth.authenticated()) { auth.rmToken(); }

  return state.target('login');
}