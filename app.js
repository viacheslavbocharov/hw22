const ALL_LANGUAGES = {
    en: 'English',
    de: 'Deutsch',
    ru: 'Russian',
    uk: 'Ukrainian'
};

document.querySelector('.btn').addEventListener('click', () => {
    //let form = document.forms[0];
    const form = document.forms.mainForm;//request by form name
    const userName = form.elements.name.value;
    const userSurname = form["surname"].value;
    const userDOB = form.elements.dob.value;
    const userSex = form.elements.gender.value;
    const userCity = form.elements.city.value;
    
    const userLanguages = [];
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

    const userText = form.elements.description.value;

    const userData = {
        name: userName,
        surname: userSurname,
        dob: userDOB,
        sex: userSex,
        city: userCity,
        message: userText,
        languages: userLanguages,
        languagesList: userLanguagesStr
    };

    console.log(userData);

    const formElement = document.querySelector('.form')
    formElement.innerHTML = `
    <p>Name: ${userName}</p>
    <p>Surname: ${userSurname}</p>
    <p>DOB: ${userDOB}</p>
    <p>Sex: ${userSex}</p>
    <p>City: ${userCity}</p>
    <p>Text: ${userText}</p>
    <p>Languages: ${userLanguagesStr}</p>
    `
});


