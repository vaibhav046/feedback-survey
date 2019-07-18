module.exports = (survey) => {
    return `
    <html>
    <div align="center"> 
    <h2>Please answer the following question?</h2>
    <p>${survey.body}</p>
    <div>
        <a href="http://localhost:3000/api/surveys/thanks">Yes</a>
    </div>
       <div>
        <a href="http://localhost:3000/api/surveys/thanks">No</a>
    </div>
    </div>
    </html>
    `
}