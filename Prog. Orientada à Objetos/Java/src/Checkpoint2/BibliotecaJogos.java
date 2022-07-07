package Checkpoint2;

import java.util.List;

class BibliotecaJogos {
    private final List<Jogo> jogos;

    BibliotecaJogos(List<Jogo> jogos) {
        this.jogos = jogos;
    }

    protected void adicionarJogo(Jogo jogo) {
        jogos.add(jogo);
    }

    protected void listarJogos() {
        for (Jogo jogo : jogos) {
            System.out.println(" - " + jogo.acessarTitulo());
        }
    }
}
