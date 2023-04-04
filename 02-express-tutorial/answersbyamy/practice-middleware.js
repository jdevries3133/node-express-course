const consoleLog = (req, res, next) => {
    console.log("Hey there mentors, is this working? :)")
    next()
}

module.exports = consoleLog