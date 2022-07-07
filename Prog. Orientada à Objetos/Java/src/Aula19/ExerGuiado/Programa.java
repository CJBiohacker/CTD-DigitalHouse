package Aula19.ExerGuiado;

import java.util.ArrayList;

class Programa {
    public static void main(String[] args) {
        Empresa empresa = new Empresa("12345678901234", new ArrayList<Empregado>());
        empresa.criaEmpregados(new ArrayList<Empregado>());
        empresa.calcularSalarioTotal();
    }
}
