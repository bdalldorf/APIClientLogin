const SESSION_KEY = 'session';

export function getSession() {
  const session = sessionStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : {};
}

export function saveSession(session) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSesssion() {
  sessionStorage.removeItem(SESSION_KEY);
}
