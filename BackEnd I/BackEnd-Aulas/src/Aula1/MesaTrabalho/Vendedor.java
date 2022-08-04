package Aula1.MesaTrabalho;

abstract class Vendedor {
    private String nome;

    protected Vendedor(String nome) {
        this.nome = nome;
    }

    protected void mostrarCategoria(int pontuacao) {
        System.out.println("PONTUAÇÃO ==> " + pontuacao);
        if (pontuacao < 20) {
            System.out.println( this.nome + " possui " + pontuacao + " e é um(a) vendedor(a) nível Novato");
        } else if (pontuacao <= 30) {
            System.out.println( this.nome + " possui " + pontuacao + " e é um(a) vendedor(a)nível Aprendiz");
        } else if (pontuacao < 40) {
            System.out.println( this.nome + " possui " + pontuacao + " e é um(a) vendedor(a) nível Bom");
        } else {
            System.out.println( this.nome + " possui " + pontuacao + " e é um(a) vendedor(a) nível Mestre");
        }
    }

    protected abstract int getVendas();

    protected abstract int calcularPontos(int vendas, int qtdAfiliados, int tempoServico);

    protected abstract int vender(int vendas);
}
