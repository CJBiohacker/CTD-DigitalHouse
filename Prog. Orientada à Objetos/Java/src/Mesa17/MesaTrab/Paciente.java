package Mesa17.MesaTrab;

import java.util.Date;

class Paciente {
    private String nome, sobrenome, historiaClinica;
    private Date dataInternacao, dataAlta;

    protected Paciente(String nome, String sobrenome, String historiaClinica, Date dataInternacao) {
        Date hoje= new Date();
        this.nome=nome;
        this.sobrenome=sobrenome;
        dataAlta=null;
        if (dataInternacao.before(hoje)) {
            this.dataInternacao = dataInternacao;
        }
    }

    public Date getDataInternacao() {
        return dataInternacao;
    }

    public Date getDataAlta() {
        return dataAlta;
    }

    public void darAlta(Date dataAlta) throws CustomDataException {
        if (dataAlta.before(dataInternacao)) {
            throw new CustomDataException("Data de alta anterior a data de internacao");
        } else {
            throw new CustomDataException("Data de alta não pode ser anterior à data de internação");
        }
    }
}
