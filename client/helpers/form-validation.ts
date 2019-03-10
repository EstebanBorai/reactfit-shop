function toDangerouslySetInnerHTML(validation: string) {
  return JSON.stringify({
    __html: validation
  });
}

export function required(value: any) {
  if (value !== undefined) {
    return undefined;
  }

  return toDangerouslySetInnerHTML('Required');
}

export function maxLength(max) {
  return function(value) {
    if (value && value.length > max) {
      return toDangerouslySetInnerHTML(`Must be ${max} characters or less.`);
    }
    
    return undefined;
  }
}

export function username(value: string) {
  const regExp = /^[a-z0-9_]*$/ig;
  if (value) {
    if (regExp.test(value)) {
      return undefined;
    }

    return toDangerouslySetInnerHTML('Username is invalid.<br />Only alphanumerics and underscore is allowed.')
  }

  return undefined;
}
