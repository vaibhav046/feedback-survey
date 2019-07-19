const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails) => {
    const invalidEmailsArray = emails.split(',').map((email) => {
        return email.trim();
    }).filter((email) => {
        return (!re.test(email))
    });

    if (invalidEmailsArray.length !== 0) {
        return `These emails are invalid : ${invalidEmailsArray}`
    }

}