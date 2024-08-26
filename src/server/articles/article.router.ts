import { Request, Response, Router } from "express";

const router = Router();

router.get('/featured', async (request: Request, response: Response) => {
  response.json({
    message: 'articles_featured',
  });
});

export { router as ArticleRouter }