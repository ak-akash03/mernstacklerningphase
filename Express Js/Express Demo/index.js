const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    // res.send("hello slass")

    res.json({
        "Akash" : 20
    })

})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));


})


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})


























// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// app.use((req, res) => {
//     console.log("request received : ");
//     res.send({
//         Name: "Akash",
//         Age : 20
//     })
// })