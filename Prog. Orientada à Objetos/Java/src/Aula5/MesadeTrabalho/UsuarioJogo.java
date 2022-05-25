package Aula5.MesadeTrabalho;

class UsuarioJogo {
    private String nome, nickname;
    private int pontuacao = 0, nivel;

//  CONSTRUTOR DA CLASSE
    public UsuarioJogo(String nome, String nickname) {
        this.nome = nome;
        this.nickname = nickname;
    }

//  MÉTODOS ESPECÍFICOS
    public void aumentarPontuacao() {
        this.pontuacao += nivel;
    }

    public void subirNivel() {
        this.nivel += 1;
    }

    public void bonus(int valor) {
        this.pontuacao += valor;
    }

//  GETTERS
    public int getPontuacao() {
        return pontuacao;
    }

    public int getNivel() {
        return nivel;
    }
}
