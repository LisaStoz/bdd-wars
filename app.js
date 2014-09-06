// Let's write application code here

function registrationMsg(days) {
  if (days > 15) {
    return 'Registration opens soon';
  } else if (days > 0) {
    if (days === 1) {
      return 'You have 1 day left to register';
    } else {
      return 'You have ' + days + ' days left to register';
    }
  }
  return '';
}
