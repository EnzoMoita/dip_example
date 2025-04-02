import { IUserRepository } from '../../interfaces/IUserRepository';

// ✅ Depende da abstração, não da implementação concreta
export class AuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    // Recebe o repositorio através de injeção de dependência
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return false;
    
    return user.password === password;
  }
}


// Segue a DIP por que depende da abstração e não da implementação concreta