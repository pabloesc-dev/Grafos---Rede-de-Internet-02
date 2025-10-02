// grafo.js
export class Grafo {
    constructor() {
        this.adj = {}; // lista de adjacência
    }

    // Adiciona um vértice (equipamento) ao grafo
    adicionarEquipamento(equipamento) {
        if (!this.adj[equipamento]) {
            this.adj[equipamento] = [];
        }
    }

    // Conecta dois equipamentos (grafo não direcionado)
    conectar(a, b) {
        if (!this.adj[a]) this.adicionarEquipamento(a);
        if (!this.adj[b]) this.adicionarEquipamento(b);

        // Evita duplicação
        if (!this.adj[a].includes(b)) {
            this.adj[a].push(b);
        }
        if (!this.adj[b].includes(a)) {
            this.adj[b].push(a);
        }
    }

    // Grau = número de conexões de um equipamento
    grau(usuario) {
        if (!this.adj[usuario]) return 0;
        return this.adj[usuario].length;
    }
}
