import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async getUserData() {
    const userData = await sessionStorage.getItem('userData');
    return JSON.stringify(userData);
  }

  public async login(postData) {
    const responseData = {
      name: postData.name,
      id: '1234',
      token: '2324234XSDWESHT'
    };

    await sessionStorage.setItem('userData', JSON.stringify(responseData));
    return true;
  }

  public signUp(postData) {

  }

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
}
