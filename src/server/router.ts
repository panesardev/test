import { Router } from 'express';
import { ArticleRouter } from './articles/article.router';

const router = Router();

router.use('/articles', ArticleRouter);

export { router as ApiRouter }