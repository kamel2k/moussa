
export class UtilisateurDto {
  id : number;
  username: string;
  email: string;
  password: string;
  role = ['user'];

  constructor(public _email: string, public _password: string) {
    this.email = _email;
    this.password = _password;
  }

  setUsername(_username: string): void {
      this.username = _username;
  }


}
