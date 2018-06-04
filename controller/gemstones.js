const model = require('../model/gemstones.js')

let create = (req, res, next) => {
  const {id, name, hardness} = req.body
  let newGem = model.create({id, name, hardness})
// console.log("JELLLOOOOO!", newGem);
  if (newGem.errors) {
    return next({status: 400, errors:newGem.errors})
  }
  res.status(201).json(newGem)
}
let getAll = (req, res, next) => {
  let data = model.getAll()
  res.status(200).send(data)
}
let getOne = (req, res, next) => {
  let id = req.params.id
  let oneGem = model.getOne(id)
  if (oneGem.errors) {
    console.log(oneGem)
    return next({status:404, error: `Status 404 ${oneGem.errors}`})
  }
  res.status(200).send(oneGem)
}
let update = (req, res, next) => {
  const id = req.params.id
  const {name, hardness} = req.body
  let updatedGem = model.update(id, {name, hardness})
  if (updatedGem.errors) {
    return next({status: 400, error: updatedGem.errors})
  }
  res.status(200).send(updatedGem)
}
let deleteOne = (req, res, next) => {
  const id = req.params.id
  let deletedGem = model.deleteOne(id)
  if (deletedGem.errors) {
    return next({status:404, error: `Status 404 ${deletedGem.errors}`})
  }
  res.status(200).send(deletedGem)
}


module.exports = {create, getAll, getOne, update, deleteOne}
