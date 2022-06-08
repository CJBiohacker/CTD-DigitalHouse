package Aula8.Exercicio;

class Paciente extends Humano {
    private String numDocumento, CPF;
    private boolean statusParticular, statusCirurgia, statusAlta;
    private Medico medico;

    protected Paciente(String nome, int idade, String numDocumento, String CPF, boolean statusParticular, boolean statusCirurgia, boolean statusAlta, Medico medico) {
        super(nome, idade);
        this.numDocumento = numDocumento;
        this.CPF = CPF;
        this.statusParticular = statusParticular;
        this.statusCirurgia = statusCirurgia;
        this.statusAlta = statusAlta;
        this.medico = medico;
    }

    protected String consultarNumDocumento() {
        return numDocumento;
    }

    protected void cadastrarNumDocumento(String numDocumento) {
        this.numDocumento = numDocumento;
    }

    protected String consultarCPF() {
        return CPF;
    }

    protected void cadastrarCPF(String CPF) {
        this.CPF = CPF;
    }

    protected boolean consultarStatusParticular() {
        return statusParticular;
    }

    protected void cadastrarStatusParticular(boolean statusParticular) {
        this.statusParticular = statusParticular;
    }

    protected boolean consultarStatusCirurgia() {
        return statusCirurgia;
    }

    protected void cadastrarStatusCirurgia(boolean statusCirurgia) {
        this.statusCirurgia = statusCirurgia;
    }

    protected boolean consultarStatusAlta() {
        return statusAlta;
    }

    protected void cadastrarStatusAlta(boolean statusAlta) {
        this.statusAlta = statusAlta;
    }

    protected Medico consultarMedico() {
        return medico;
    }

    protected void cadastrarMedico(Medico medico) {
        this.medico = medico;
    }
}
