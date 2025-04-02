import { User } from '../../models/User';

// ❌ Bad Example: Implementação concreta sem abstração
export class UserRepository {
  private users: User[] = [];

  constructor() {
    this.users.push({
      id: '1',
      email: 'test@example.com',
      password: 'hashed_password_123'
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email);
    return user || null;
  }
}