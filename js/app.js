const ALL_LANGUAGES = {
    en: 'English',
    de: 'Deutsch',
    ru: 'Russian',
    uk: 'Ukrainian'
};

document.querySelector('.btn').addEventListener('click', () => {

    const form = document.forms.mainForm;
    const userData = getUserDataFromForm(form);
    displayUserData(userData)

});


