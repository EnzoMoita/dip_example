import { IUserRepository } from '../../interfaces/IUserRepository';

// ✅ Good Example: High-level module depends on abstraction
export class AuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    // Dependency injection through constructor
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return false;
    
    // Simplified password check (in real world, use proper password hashing)
    return user.password === password;
  }
}