import { User } from '../../models/User';
import { IUserRepository } from '../../interfaces/IUserRepository';

// ✅ Good Example: Implementation of the abstract interface
export class UserRepository implements IUserRepository {
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