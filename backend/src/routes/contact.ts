import { Router, Request, Response } from 'express';
import Contact from '../models/Contact';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Failed to send message.' });
  }
});

export default router;
