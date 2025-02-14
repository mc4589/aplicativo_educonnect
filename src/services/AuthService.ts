export interface User {
  username: string;
  password: string;
  role: 'publicador' | 'administrador';
}

const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

const saveUsersToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

const registerUser = (username: string, password: string, role: 'publicador' | 'administrador'): boolean => {
  if (users.some(user => user.username === username)) {
    return false; 
  }
  const newUser: User = { username, password, role };
  users.push(newUser);
  saveUsersToLocalStorage();
  return true;
};

const loginUser = (username: string, password: string): User | null => {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

const logoutUser = () => {
  localStorage.removeItem('currentUser');
};

const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
};

const AuthService = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default AuthService;
