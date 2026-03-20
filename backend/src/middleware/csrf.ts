import { Request, Response, NextFunction } from 'express';
import { timingSafeEqual } from 'crypto';

export function verifyCsrf(req: Request, res: Response, next: NextFunction): void {
  // Cookie is signed+httpOnly; signedCookies populated by cookie-parser with secret
  const cookieToken = req.signedCookies?.csrf_token as string | undefined;
  const headerToken = req.headers['x-csrf-token'] as string | undefined;

  if (
    !cookieToken ||
    !headerToken ||
    cookieToken.length !== headerToken.length ||
    !timingSafeEqual(Buffer.from(cookieToken), Buffer.from(headerToken))
  ) {
    res.status(403).json({ success: false, message: 'Invalid CSRF token.' });
    return;
  }
  next();
}
