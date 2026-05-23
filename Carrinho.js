const API = "http://localhost:5000/api";

function getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

async function finalizar() {
    const carrinho = getCarrinho();

    const itens = carrinho.map(id => ({
        produtoId: id,
        quantidade: 1
    }));

    const pedido = {
        clienteId: 1, // fixo por enquanto
        itens: itens
    };

    const res = await fetch(`${API}/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    const data = await res.json();

    alert("Pedido realizado! Total: R$ " + data.total);

    localStorage.removeItem("carrinho");
}