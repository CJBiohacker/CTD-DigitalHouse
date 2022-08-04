package Aula1.MesaTrabalho;

class Afiliado extends Vendedor {

    private int vendas;
    private int pontuacao;

    public Afiliado(String nome, int vendas, int pontuacao) {
        super(nome);
        this.vendas = vendas;
        this.pontuacao = pontuacao;
    }

    @Override
    protected int getVendas() {
        return vendas;
    }

    @Override
    protected int calcularPontos(int vendas, int qtdAfiliados, int tempoServico) {
        System.out.println("PONTUAÇÃO CALCULDA ==> " + this.pontuacao);
        this.pontuacao += vender(vendas);
        return this.pontuacao;
    }

    @Override
    protected int vender(int vendas) {
        this.pontuacao += (vendas * 15);
        return this.pontuacao;
    }
}
