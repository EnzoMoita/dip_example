import { UserRepository } from '../../repositories/wrong/UserRepository';

// ❌ Bad Example: High-level module (AuthService) depends directly on low-level module (UserRepository)
export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    // Direct dependency on concrete implementation - violates DIP
    this.userRepository = new UserRepository();
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return false;
    
    // Simplified password check (in real world, use proper password hashing)
    return user.password === password;
  }
}