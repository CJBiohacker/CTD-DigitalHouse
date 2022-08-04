package Aula1.MesaTrabalho;

import static java.lang.Integer.parseInt;

class Programa {
    public static void main(String[] args) {
        Funcionario funcionario = new Funcionario("João", 1, 0, 0);

        int pontoAtual = funcionario.calcularPontos(
                funcionario.getVendas(),
                2,
                funcionario.getTempoServico()
        );

        funcionario.mostrarCategoria(pontoAtual);

        Afiliado afiliado = new Afiliado("Maria", 5, 0);

        int pontoAtualAfiliado = afiliado.calcularPontos(
                afiliado.getVendas(), 0, 0);

        afiliado.mostrarCategoria(pontoAtualAfiliado);
    }
}
