module.exports = {
  basicAuth: function (auth) {
    const fromBase64 = Buffer.from(auth.split(' ')[1], 'base64').toString()
    const creds = fromBase64.split(':');
    return { username: creds[0], password: creds[1] };
  }
}

