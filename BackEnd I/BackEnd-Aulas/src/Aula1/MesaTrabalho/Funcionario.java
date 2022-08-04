package Aula1.MesaTrabalho;

class Funcionario extends Vendedor {

    private int vendas;
    private int pontuacao;
    private int tempoServico; // Em anos

    protected Funcionario(String nome, int vendas, int pontuacao, int tempoServico) {
        super(nome);
        this.vendas = vendas;
        this.pontuacao = pontuacao;
        this.tempoServico = tempoServico;
    }

    protected int obterAfiliado(int qtdAfiliados) {
        this.pontuacao = (qtdAfiliados * 10);
        System.out.println("PONTUAÇÃO ATUAL DE AFILIADO ==> " + this.pontuacao);
        return this.pontuacao;
    }

    protected int getTempoServico() {
        return tempoServico;
    }

    @Override
    protected int getVendas() {
        return vendas;
    }

    @Override
    protected int calcularPontos(int vendas, int qtdAfiliados, int tempoServico) {
        System.out.println("PONTUAÇÃO CALCULDA ==> " + this.pontuacao);
        this.pontuacao += vender(vendas) + obterAfiliado(qtdAfiliados) + (tempoServico * 5);
        return this.pontuacao;
    }

    @Override
    protected int vender(int qtdVendas) {
        this.pontuacao = (qtdVendas * 5);
        System.out.println("PONTUAÇÃO ATUAL DE VENDA ==> " + pontuacao);
        return this.pontuacao;
    }
}
