module.exports = (survey) => {
    return `
    <html>
    <div align="center"> 
    <h2>Please answer the following question?</h2>
    <p>${survey.body}</p>
    <div>
        <a href="http://localhost:3000">Yes</a>
    </div>
       <div>
        <a href="http://localhost:3000">No</a>
    </div>
    </div>
    </html>
    `
}