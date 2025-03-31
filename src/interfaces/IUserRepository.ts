import { User } from '../models/User';

// ✅ Good Example: Abstract interface that defines the contract
export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
}