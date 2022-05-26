package Aula6.ExercCodificação;

import java.time.LocalDate;

class Impressora {
    private String modelo, tipoConexao;
    private LocalDate dataFabricacao;
    private int folhasDisponiveis;

    public Impressora(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis) {
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhasDisponiveis = folhasDisponiveis;
    }

    private boolean temPapel() {
        return folhasDisponiveis > 0;
    }

    public void imprimir(String texto) {
        if ( temPapel() ){
            folhasDisponiveis -= 1;
            System.out.println("Imprimindo o texto \n" + texto);
            System.out.println("--- Dados da Impressora --- \n Modelo: " + modelo + "\n Tipo de Conexão: " + tipoConexao
                    + "\n Data Fab.: " + dataFabricacao + "\n Folhas disponíveis: " + folhasDisponiveis);
        } else {
            System.out.println("A Impressora está sem folhas !");
        }
    }
}
