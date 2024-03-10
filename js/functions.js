function convertUserLanguagesInString(userLanguages) {
    let userLanguagesStr = '';
    document.forms.mainForm.languages.forEach(languageCheckbox => {
        if (languageCheckbox.checked) {
            userLanguages.push(languageCheckbox.value)
            //console.log(`Your languages: ${ALL_LANGUAGES[languageCheckbox.value]}`)
            if (userLanguagesStr === '') {
                userLanguagesStr += `${ALL_LANGUAGES[languageCheckbox.value]}`;
            } else {
                userLanguagesStr += `, ${ALL_LANGUAGES[languageCheckbox.value]}`;
            }
        }
    });
    return userLanguagesStr;
};


function getUserDataFromForm(form) {
    const userName = form.elements.name.value;
    const userSurname = form.elements.surname.value;
    const userDOB = form.elements.dob.value;
    const userSex = form.elements.gender.value;    
    const userCity = form.elements.city.value;
    const userText = form.elements.description.value;
    const userLanguages = [];
    let userLanguagesStr = convertUserLanguagesInString(userLanguages);
    
    return {
        name: userName,
        surname: userSurname,
        dob: userDOB,
        sex: userSex,
        city: userCity,
        message: userText,
        languages: userLanguages,
        languagesList: userLanguagesStr
    };
}


function displayUserData(userData) {
    const formElement = document.querySelector('.form')
    formElement.innerHTML = `
<p>Name: ${userData.name}</p>
<p>Surname: ${userData.surname}</p>
<p>DOB: ${userData.dob}</p>
<p>Sex: ${userData.sex}</p>
<p>City: ${userData.city}</p>
<p>Text: ${userData.message}</p>
<p>Languages: ${userData.languagesList}</p>
`
}