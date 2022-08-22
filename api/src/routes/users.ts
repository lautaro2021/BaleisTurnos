import { Router } from "express";
import { addNewUser, deleteUser, getAllUsers, getUserById, updateUserInfo } from "../services/userServices";
const router = Router()

router.get('/',async (_req,res)=>{
    try {
        const allUsers = await getAllUsers()
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id',async (req,res)=>{
    const id = req.params.id
    try {
        const userById = await getUserById(id)
        res.json(userById)
    } catch (error) {
        console.log(error)
    }
})
router.post('/',async (req,res)=>{
    const newUser = req.body
    try {
        const userById = await addNewUser(newUser)
        res.send(userById)
    } catch (error) {
        console.log(error)
    }
})
router.put('/',async (req,res)=>{
    const newUser = req.body
    try {
        const userById = await updateUserInfo(newUser)
        res.send(userById)
    } catch (error) {
        console.log(error)
    }
})
router.delete('/:id',async (req,res)=>{
    const id = req.params.id
    try {
        const userById = await deleteUser(id)
        res.send(userById)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router