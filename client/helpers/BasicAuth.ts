import ICredentials from 'types/ICredentials';

const BasicAuth = function(credentials: ICredentials) {
  this.username = credentials.username;
  this.password = credentials.password;
  this.authType = 'Basic';
};

BasicAuth.prototype.hide = function(): string {
  const encodedCredentials = btoa(`${this.username}:${this.password}`);
  return `Basic ${encodedCredentials}`;
};

BasicAuth.prototype.unHide = function(token: string): ICredentials {
  const [authType, encodedCredentials] = token.split(' ');
  
  if (authType === this.authType) {
    let credentialPair = atob(encodedCredentials);
    const [username, password] = credentialPair.split(':');

    return { username, password };
  }

  throw new Error('Unable to decode. The token should have "Basic" authentication type.');
}

export default BasicAuth;
