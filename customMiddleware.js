const characterLimit = (req, res, next) => element => {
  if(!req.body) {
    next();
  } else {
    if(req.body.element.length > 128) {
    res.status(400).json({error: `${element} must not exceed 128 characters`})
  } else {
    next();
  }
  }
  
}

const stringCheck = (req, res, next) => element => {
  if(!req.body) {
    next();
  } else {
    if(!(typeof req.body.element === "string" || req.body.element instanceof String)) {
    res.status(400).json({error: `${element} must be a string`})
  } else {
    next();
  }
  }
  
}

const numCheck = async (req, res, next) => async element => {
  if(!req.body) {
    next();
  } else {
    if(!(typeof req.body.element === "number" || req.body.element instanceof Number)) {
    res.status(400).json({error: `${element} must be a number`})
  } else {
    next();
  }
  }
  
}

const elementExists = (req, res, next) => element => {
  if(!req.body) {
    next();
  } else {
    if(!req.body.element) {
    res.status(400).json({error: `must include ${element}`})
  } else {
    next();
  }
  }
  
}

const boolean = async (req, res, next) => async element => {
  if(!req.body.element) {
    next();
  } else {
    if(!(typeof req.body.element === "boolean" || req.body.element instanceof Boolean)) {
      res.status(400).json({error: `${element} must be a boolean`})
    } else {
      next();
    }
  }
}

module.exports = {
  characterLimit: characterLimit,
  stringCheck: stringCheck,
  numCheck: numCheck,
  elementExists: elementExists,
  boolean: boolean
}
