#include <stdio.h>
#include <string.h>

#define N 4

typedef struct
{
    int adj[N][N];
    char nos[N];
    int n;
} Grafo;

void inicializarGrafo(Grafo *g)
{
    g->n = 0;
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            g->adj[i][j] = 0;
        }
    }
}

void adicionarNo(Grafo *g, char nome)
{

    for (int i = 0; i < g->n; i++)
    {
        if (g->nos[i] == nome)
            return;
    }
    g->nos[g->n++] = nome;
}

int indiceNo(Grafo *g, char nome)
{
    for (int i = 0; i < g->n; i++)
    {
        if (g->nos[i] == nome)
            return i;
    }
    return -1;
}

//  não-direcionada
void adicionarAresta(Grafo *g, char a, char b)
{
    int i = indiceNo(g, a);
    int j = indiceNo(g, b);
    if (i != -1 && j != -1)
    {
        g->adj[i][j] = 1;
        g->adj[j][i] = 1;
    }
}

void imprimirGrafo(Grafo *g)
{
    printf("   ");
    for (int i = 0; i < g->n; i++)
    {
        printf("%c ", g->nos[i]);
    }
    printf("\n");

    for (int i = 0; i < g->n; i++)
    {
        printf("%c: ", g->nos[i]);
        for (int j = 0; j < g->n; j++)
        {
            printf("%d ", g->adj[i][j]);
        }
        printf("\n");
    }
}

int main()
{
    Grafo g;
    inicializarGrafo(&g);

    adicionarNo(&g, 'A');
    adicionarNo(&g, 'B');
    adicionarNo(&g, 'C');
    adicionarNo(&g, 'D');

    adicionarAresta(&g, 'A', 'B');
    adicionarAresta(&g, 'A', 'C');
    adicionarAresta(&g, 'B', 'D');
    adicionarAresta(&g, 'C', 'D');

    imprimirGrafo(&g);

    return 0;
}
