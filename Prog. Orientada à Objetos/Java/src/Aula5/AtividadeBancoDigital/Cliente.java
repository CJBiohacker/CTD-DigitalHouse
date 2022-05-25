package Aula5.AtividadeBancoDigital;

public class Cliente {
    int numeroCliente;
    String nome;
    double divida;

//  CONSTRUTOR DA CLASSE
    protected Cliente(int numeroCliente, String nome, double divida) {
        this.numeroCliente = numeroCliente;
        this.nome = nome;
        this.divida = divida;
    }

//  MÉTODOS ESPECÍFICOS
    protected void aumentarDivida(double valor) {
        this.divida = divida + valor;
    }

    protected void pagarDivida(double valor) {
        this.divida = divida - valor;
    }

//  MÉTODOS GETTERS E SETTERS
    protected int getNumeroCleinte() {
        return numeroCliente;
    }

    protected void setNumeroCleinte(int numeroCliente) {
        this.numeroCliente = numeroCliente;
    }

    protected String getNome() {
        return nome;
    }

    protected void setNome(String nome) {
        this.nome = nome;
    }

    protected double getDivida() {
        return divida;
    }

    protected void setDivida(double divida) {
        this.divida = divida;
    }
}



