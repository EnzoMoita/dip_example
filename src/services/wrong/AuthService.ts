import { UserRepository } from '../../repositories/wrong/UserRepository';

// ❌ Bad Example - Implementação concreta sem abstração
export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    // Here - Dependency directly userRepository
    this.userRepository = new UserRepository();
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return false;
    
    return user.password === password;
  }
}

// Viola a DIP por que o modulo de alto nivel depende diretamente do modulo de baixo nivel