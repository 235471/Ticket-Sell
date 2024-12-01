const sellTicket = (id,qty) => {let totalLeft = parseInt(document.getElementById(`qtd-${id}`).textContent);
        totalLeft >= qty ? (document.getElementById(`qtd-${id}`).textContent = totalLeft - qty, alert('Compra realizada com sucesso!'))
        : alert(`Descuple não temos ingressos suficientes para satisfazer sua compra no setor ${id}!`);
}

function buyTicket() {
    let type = document.getElementById('tipo-ingresso').value;
    let quantity = parseInt(document.getElementById('qtd').value);
    if(!isNaN(quantity) && quantity > 0) {
        sellTicket(type,quantity);
    }     
    else {
        alert('Quantidade inválida!');
    }
}