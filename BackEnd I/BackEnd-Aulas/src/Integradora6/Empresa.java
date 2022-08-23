package Integradora6;

import java.io.Serializable;
import java.util.ArrayList;

public class Empresa implements Serializable {
    private String cnpj;
    private String razaoSocial;
    private ArrayList<Funcionario> listaFunc;

    public Empresa(String cnpj, String razaoSocial, ArrayList<Funcionario> listaFunc) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.listaFunc = listaFunc;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public ArrayList<Funcionario> getListaFunc() {
        return listaFunc;
    }

    public void setListaFunc(ArrayList<Funcionario> listaFunc) {
        this.listaFunc = listaFunc;
    }

    public void addFuncionario(Funcionario funcionario) {
        this.listaFunc.add(funcionario);
    }
}
