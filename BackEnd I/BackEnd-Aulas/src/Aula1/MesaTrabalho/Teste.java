package Aula1.MesaTrabalho;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class Teste {
    Funcionario func1, func2;
    Afiliado afi1, afi2;

    @BeforeEach
    public void doBefore() {
        func1 = new Funcionario("João", 1, 0, 1);
        func1.vender(2);

        func2 = new Funcionario("Maria",1,0, 5);
        func2.vender(1);

        afi1 = new Afiliado("Rick", 5, 0);
        afi1.vender(4);

        afi2 = new Afiliado("Morty", 8, 0);
        afi2.vender(1);

    }

    @Test
    public void mostrarVendedores() {
        int pontosFunc1 = func1.calcularPontos(func1.getVendas(), 2, func1.getTempoServico());
        int pontosFunc2 = func2.calcularPontos(func2.getVendas(), 2, func2.getTempoServico());
        int pontosAfi1 = afi1.calcularPontos(afi1.getVendas(),0,0);
        int pontosAfi2 = afi2.calcularPontos(afi2.getVendas(),0,0);

        func1.mostrarCategoria(pontosFunc1);
        func2.mostrarCategoria(pontosFunc2);
        afi1.mostrarCategoria(pontosAfi1);
        afi2.mostrarCategoria(pontosAfi2);
    }
}