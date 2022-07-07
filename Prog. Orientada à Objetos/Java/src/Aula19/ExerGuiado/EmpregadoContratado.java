package Aula19.ExerGuiado;

class EmpregadoContratado extends Empregado {
    private double valorHora, imposto;

    public EmpregadoContratado() {
        super();
        this.valorHora = valorHora;
        this.imposto = imposto;
    }

    @Override
    protected void calculaSalarioTotal(int dias) {
        double salarioBruto = (valorHora * 8 * dias);
        double desconto = (salarioBruto * imposto);
        double salarioLiquido = (salarioBruto - desconto);
        System.out.println("Salário total: " + salarioLiquido);
    }
}
