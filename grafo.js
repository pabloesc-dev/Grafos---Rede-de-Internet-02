class Grafo {
    constructor() {
        this.adj = {};
    }

    adicionarPessoa(p) {
        if (!this.adj[p]) {
            this.adj[p] = [];
        }
    }

    adicionarAresta(a, b) {
        this.adicionarPessoa(a);
        this.adicionarPessoa(b);
        this.adj[a].push(b);
        this.adj[b].push(a);
    }
}

// Criar grafo e adicionar conexões
let g = new Grafo();
g.adicionarAresta("A", "B");
g.adicionarAresta("A", "C");
g.adicionarAresta("B", "D");
g.adicionarAresta("C", "D");

// Pegar canvas
const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// Definir posições fixas para cada nó
let posicoes = {
    "A": { x: 100, y: 100 },
    "B": { x: 300, y: 80 },
    "C": { x: 200, y: 250 },
    "D": { x: 400, y: 200 }
};

// Desenhar arestas
for (let no in g.adj) {
    g.adj[no].forEach(vizinho => {
        ctx.beginPath();
        ctx.moveTo(posicoes[no].x, posicoes[no].y);
        ctx.lineTo(posicoes[vizinho].x, posicoes[vizinho].y);
        ctx.stroke();
    });
}

// Desenhar nós
for (let no in posicoes) {
    let { x, y } = posicoes[no];
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(no, x - 5, y + 5);
}
