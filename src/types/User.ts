export interface User {
  username: string;
  password: string;
  role: 'publicador' | 'administrador';
}
