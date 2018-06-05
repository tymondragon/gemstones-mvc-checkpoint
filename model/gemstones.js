const gems =  require('../db/gemstones.js')

let create = ({id, name, hardness}) => {
  const errors = []
  let response
  if (!name || !hardness) {
    errors.push("Fields name and hardness are required")
    response = {errors}
  } else {
    const gem = ({id, name, hardness})
    gems.push(gem)
    response = {data: gem}
  }
  return response
}
let getAll = (req, res, next) => {
  return {data : gems}
}
let getOne = (id) => {
  const errors = []
  let gem = gems.find(gem => gem.id == id)
  let response
  if (!gem) {
    errors.push(`Cannot find the gem with the ID of ${id}`)
    response = {errors}
  } else {
    response = {data: gem}
  }
  return response
}
let update = (id, {name, hardness}) => {
  const errors =[]
  let response
  let gem = gems.find(gem => gem.id == id)
  if (!gem) {
    errors.push(`Could not find gem with id ${id}`)
    response = {errors}
  } else if (!name || !hardness) {
    errors.push(`Fields name and hardness are required.`)
    response = {errors}
  } else {
    gem.name = name
    gem.hardness = hardness
    response = {data:gem}
  }
  return response
}
let deleteOne = (id) => {
  const errors = []
  let gem = gems.find(gem => gem.id == id)
  const index = gems.indexOf(gem)
  let response
  if (!gem) {
    errors.push(`Cannot find the gem with the ID of ${id}.`)
    response = {errors}
  } else {
    gems.splice(index, 1)
    response = `${gem.name} deleted from the database.`
  }
  return response
}

module.exports = {create, getAll, getOne, update, deleteOne}