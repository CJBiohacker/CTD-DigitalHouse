package Aula19.ExerGuiado;

import java.util.List;

class Empresa {
    private String cnpj;
    private List<Empregado> empregados;

    public Empresa(String cnpj, List<Empregado> empregados) {
        this.cnpj = cnpj;
    }

    public void criaEmpregados(List<Empregado> empregados) {
        this.empregados = empregados;
    }

    protected void calcularSalarioTotal() {
    }
}
