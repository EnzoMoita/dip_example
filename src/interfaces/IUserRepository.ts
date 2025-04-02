import { User } from '../models/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
}



// Defini Contrato Abstrato - para o repositório de usuários