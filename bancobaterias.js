const fabricantesPorMaterial = {
    chumbo: ["eltek", "moura"],
    litio: ["eltek", "moura"]
};

const modelosPorFabricanteBaterias = {
    eltek: ["Modelo Eltek 1", "Modelo Eltek 2", "Modelo Eltek 3"],
    moura: ["Modelo Moura 1", "Modelo Moura 2", "Modelo Moura 3"]
};

function atualizarFabricantesBaterias() {
    const material = document.getElementById("material_baterias").value;
    console.log("Material selecionado:", material); // Log para depuração
    const fabricanteSelect = document.getElementById("fabricante_baterias");
    const modeloSelect = document.getElementById("modelo_baterias");
    
    // Limpa as opções atuais de fabricante
    fabricanteSelect.innerHTML = '<option value="">Selecione um fabricante</option>';
    
    // Limpa as opções atuais de modelo
    modeloSelect.innerHTML = '<option value="">Selecione um modelo</option>';
    
    if (material && fabricantesPorMaterial[material]) {
        const fabricantes = fabricantesPorMaterial[material];
        fabricantes.forEach(fabricante => {
            const option = document.createElement("option");
            option.value = fabricante;
            option.textContent = fabricante.charAt(0).toUpperCase() + fabricante.slice(1);
            fabricanteSelect.appendChild(option);
        });
    }
}

function atualizarModelosBaterias() {
    const fabricante = document.getElementById("fabricante_baterias").value;
    const modeloSelect = document.getElementById("modelo_baterias");
    
    // Limpa as opções atuais de modelo
    modeloSelect.innerHTML = '<option value="">Selecione um modelo</option>';
    
    if (fabricante && modelosPorFabricanteBaterias[fabricante]) {
        const modelos = modelosPorFabricanteBaterias[fabricante];
        modelos.forEach(modelo => {
            const option = document.createElement("option");
            option.value = modelo.toLowerCase().replace(/ /g, "_");
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    }
}

// Adiciona evento para limpar os modelos quando o fabricante é alterado
document.getElementById("fabricante_baterias").addEventListener("change", atualizarModelosBaterias);