import { Router } from 'express';

import AuthenticateUserService from '../services/User/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/login', async (request, response) => {
  const { email, password} = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email, 
    password
  });

  delete user.password;

  return response.json({ user, token }); 
});

export default sessionsRouter;