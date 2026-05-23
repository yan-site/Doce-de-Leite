const API = "http://localhost:5000/api";

async function getProdutos() {
    const res = await fetch(`${API}/produtos`);
    return await res.json();
}

async function finalizarCompra(pedido) {
    const res = await fetch(`${API}/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    return await res.json();
}