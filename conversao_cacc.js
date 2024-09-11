function atualizarCamposCorrente() {
    const fases = document.getElementById('fases').value;
    const correnteAcR = document.getElementById('corrente_ac_r');
    const correnteAcS = document.getElementById('corrente_ac_s');
    const correnteAcT = document.getElementById('corrente_ac_t');

    if (fases == 2) {
        correnteAcR.style.display = 'block';
        correnteAcS.style.display = 'block';
        correnteAcT.style.display = 'none';
    } else if (fases == 3) {
        correnteAcR.style.display = 'block';
        correnteAcS.style.display = 'block';
        correnteAcT.style.display = 'block';
    } else {
        correnteAcR.style.display = 'none';
        correnteAcS.style.display = 'none';
        correnteAcT.style.display = 'none';
    }
}



function calcularCorrenteProjeto() {
    // Obter valores de entrada
    const V_dc = Math.abs(parseFloat(document.getElementById('V_dc').value));
    const I_dc = parseFloat(document.getElementById('I_dc').value);
    const fases = parseInt(document.getElementById('fases').value);
    const V_ac = parseFloat(document.getElementById('V_ac').value);

    // Verificar se os valores são válidos
    if (isNaN(V_dc) || isNaN(I_dc) || isNaN(fases) || isNaN(V_ac)) {
        alert('Por favor, insira todos os valores corretamente.');
        return;
    }



    // Constantes
    const FP = 0.98;
    const Rendimento = 0.99;

    // Calcular a Potência DC
    const P_dc = V_dc * I_dc;
    

    // Calcular Corrente de Projeto
    let I_projeto;
    if (fases === 2) {
        const V_ac_bifasico = 110; // Tensão fase-terra para bifásico
        I_projeto = P_dc / (V_ac_bifasico * FP * Rendimento * 2);
    } else if (fases === 3) {
        const V_ac_trifasico = 220; // Tensão de linha para trifásico
        I_projeto = P_dc / (Math.sqrt(3) * V_ac_trifasico * FP * Rendimento);
    } else {
        alert('Número de fases inválido. Deve ser 2 (bifásico) ou 3 (trifásico).');
        return;
    }

    // Exibir resultado
    document.getElementById('resultado').innerText = `Corrente de Projeto: ${I_projeto.toFixed(2)} A`;
}