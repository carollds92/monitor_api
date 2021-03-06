import express from 'express'

import PatientController from '../controllers/Patient.Controller'

let router = express.Router()

let pt = new PatientController()

import passport from 'passport'
const protect = passport.authenticate('jwt', {
	session: false
})

router.post('/bpm/', (req, res) => {
  pt.saveBpm(req, res)
})

router.post('/', protect, (req, res) => {
  pt.save(req, res)
})

router.get('/monitor/:id', protect, (req, res) => {
  pt.loadDataFromSensorTag(req, res);
})

router.get('/doctor/:id', protect, (req, res) => {
  pt.getByDoc(req, res);
})

router.get('/', protect, (req, res) => {
  pt.getAll(req, res);
})

router.get('/:id', protect, (req, res) => {
  pt.getById(req, res)
})
 
router.put('/:_id', protect, (req, res) => {
  pt.updateById(req, res)
})

router.delete('/:id', protect, (req, res) => {
  pt.removeById(req, res)
})

export default router