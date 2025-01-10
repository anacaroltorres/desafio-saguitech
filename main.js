function emitirNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.split(',').map(item => item.trim());
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    const impostos = {
        IRPF: valorVenda * irpf,
        PIS: valorVenda * pis,
        COFINS: valorVenda * cofins,
        INSS: valorVenda * inss,
        ISSQN: valorVenda * issqn,
    };

    const totalImpostos = Object.values(impostos).reduce((acc, imposto) => acc + imposto, 0);
    const valorLiquido = valorVenda - totalImpostos;

    const notaFiscalHTML = `
        <table>
            <tr><th colspan="2">Nota Fiscal</th></tr>
            <tr><td>Valor da Venda:</td><td>R$ ${valorVenda.toFixed(2)}</td></tr>
            <tr><td>Itens Vendidos:</td><td>${itens.join(', ')}</td></tr>
            <tr><th colspan="2">Impostos</th></tr>
            ${Object.entries(impostos)
                .map(([key, value]) => `<tr><td>${key}:</td><td>R$ ${value.toFixed(2)}</td></tr>`)
                .join('')}
            <tr><td>Total de Impostos:</td><td>R$ ${totalImpostos.toFixed(2)}</td></tr>
            <tr><td>Valor Líquido:</td><td>R$ ${valorLiquido.toFixed(2)}</td></tr>
        </table>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
    document.getElementById('result').style.display = 'block';
}


