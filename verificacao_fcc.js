const modelosPorFabricante = {
    eltek: ["Modelo Eltek 1", "Modelo Eltek 2", "Modelo Eltek 3"],
    moura: ["Modelo Moura 1", "Modelo Moura 2", "Modelo Moura 3"]
};

function atualizarModelos() {
    const fabricante = document.getElementById("fabricante").value;
    const modeloSelect = document.getElementById("modelo");
    
    // Limpa as opções atuais
    modeloSelect.innerHTML = '<option value="">Selecione um modelo</option>';
    
    if (fabricante && modelosPorFabricante[fabricante]) {
        const modelos = modelosPorFabricante[fabricante];
        modelos.forEach(modelo => {
            const option = document.createElement("option");
            option.value = modelo.toLowerCase().replace(/ /g, "_");
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    }
}