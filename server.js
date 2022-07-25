const express = require('express')

const app = express()

app.use((request, response, next) => {

})

console.log('appease')

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});