// routes/api.js
import express from 'express'
import { getPiStatus, fetchPiData } from '../lib/pi'
import { PiModel } from '../models/piModel'

const router = express.Router()

router.get('/pi/status', async (req, res) => {
  const piStatus = await getPiStatus()
  res.json(piStatus)
})

router.get('/pi/data', async (req, res) => {
  const piData = await fetchPiData()
  const piModel = new PiModel(piData)
  res.json(piModel.getData())
})

export default router
