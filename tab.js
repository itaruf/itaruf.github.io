function showSubTab(subtabId) {
    var subtabContents = document.querySelectorAll('.subtab-content');
    subtabContents.forEach(function (subtabContent) {
        subtabContent.classList.remove('active');
    });

    var selectedSubtabContent = document.getElementById(subtabId);
    selectedSubtabContent.classList.add('active');

    var subtabs = document.querySelectorAll('.subtab');
    subtabs.forEach(function (subtab) {
        subtab.classList.remove('active');
    });

    var selectedSubtab = document.querySelector('.subtab[data-subtab="' + subtabId + '"]');
    if (selectedSubtab) {
        selectedSubtab.classList.add('active');
    }
}

function showProjectTab(projectTabId) {
    var projectTabContents = document.querySelectorAll('.projecttab-content');
    projectTabContents.forEach(function (projectTabContent) {
        projectTabContent.classList.remove('active');
    });

    var selectedProjectTabContent = document.getElementById(projectTabId);
    selectedProjectTabContent.classList.add('active');

    var projectSubtabs = document.querySelectorAll('.subtab');
    projectSubtabs.forEach(function (subtab) {
        subtab.classList.remove('active');
    });

    var selectedProjectSubtab = document.querySelector('.subtab[data-projecttab="' + projectTabId + '"]');
    if (selectedProjectSubtab) {
        selectedProjectSubtab.classList.add('active');
    }
}

function showProfessionalTab(profesionnalTabId) {
    var projectTabContents = document.querySelectorAll('.profesionnaltab-content');
    projectTabContents.forEach(function (projectTabContent) {
        projectTabContent.classList.remove('active');
    });

    var selectedProjectTabContent = document.getElementById(profesionnalTabId);
    selectedProjectTabContent.classList.add('active');

    var projectSubtabs = document.querySelectorAll('.subtab');
    projectSubtabs.forEach(function (subtab) {
        subtab.classList.remove('active');
    });

    var selectedProjectSubtab = document.querySelector('.subtab[data-profesionnaltab="' + profesionnalTabId + '"]');
    if (selectedProjectSubtab) {
        selectedProjectSubtab.classList.add('active');
    }
}
