// Example demonstrating both implementations
import { AuthService as WrongAuthService } from './services/wrong/AuthService';
import { AuthService as CorrectAuthService } from './services/correct/AuthService';
import { UserRepository } from './repositories/corrrect/UserRepository';

async function main() {
  console.log('Testing Wrong Implementation (Violating DIP):');
  const wrongAuthService = new WrongAuthService();
  const wrongLoginResult = await wrongAuthService.login('test@example.com', 'hashed_password_123');
  console.log('Login result:', wrongLoginResult);

  console.log('\nTesting Correct Implementation (Following DIP):');
  const userRepository = new UserRepository();
  const correctAuthService = new CorrectAuthService(userRepository);
  const correctLoginResult = await correctAuthService.login('test@example.com', 'hashed_password_123');
  console.log('Login result:', correctLoginResult);
}

main().catch(console.error);