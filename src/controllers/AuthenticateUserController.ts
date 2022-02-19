import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle (req:Request, res:Response) {
		const { code, social } = req.body
    const service = new AuthenticateUserService()

		try {
			const result = await service.execute(code, social)
			return res.json(result);
		} catch(err) {
			return res.json({ Error: err.message });
		}
	}
}

export { AuthenticateUserController }

