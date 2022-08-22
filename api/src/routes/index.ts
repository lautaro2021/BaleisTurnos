import { Router} from 'express';
const users = require('./users');
const turnos = require('./turnos');

const router = Router();

router.use('/users', users);
router.use('/turnos', turnos)

module.exports = router;