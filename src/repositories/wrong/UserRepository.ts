import { User } from '../../models/User';

// ❌ Bad Example: Concrete implementation without abstraction
export class UserRepository {
  private users: User[] = [];

  constructor() {
    // Simulate database with some test users
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