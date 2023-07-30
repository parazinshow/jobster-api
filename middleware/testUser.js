const { BadRequestError } = require('../errors')

const testUser = (req, res, next) => {
  const isTestUser = req.user.testUser

  if (isTestUser) {
    throw new BadRequestError('Test User. Read Only')
  }
  next()
}

module.exports = testUser
