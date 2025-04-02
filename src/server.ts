import express, { Router } from 'express';
import cors from 'cors';
import { AuthService } from './services/correct/AuthService';
import { UserRepository } from './repositories/corrrect/UserRepository';

const app = express();
const router: Router = express.Router();
app.use(cors());
app.use(express.json());

// Instanciando os serviços com a implementação correta (seguindo DIP)
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

router.post('/login', async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email e senha são obrigatórios'
      });
    }

    const isAuthenticated = await authService.login(email, password);

    if (isAuthenticated) {
      return res.json({
        success: true,
        message: 'Login realizado com sucesso',
        user: { email }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Email ou senha inválidos'
      });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});