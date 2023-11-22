function showSection(sectionId) {
    // Esconde todas as seções
    var sections = document.querySelectorAll('.config-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostra a seção clicada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}