package Aula1;

class Mesa_Trabalho_1 {
    public static void main(String[] args) {
        String nomeCao , nomePeixe , nomeGato,
                comidaCao, comidaPeixe, comidaGato;
        int idadeCao, idadePeixe, idadeGato;


        nomeCao = "Shesheu";
        nomePeixe = "Nemo";
        nomeGato = "Snow";
        idadeCao = 3;
        idadePeixe = 1;
        idadeGato = 3;
        comidaCao = "1kg e meio";
        comidaPeixe = "140 gramas";
        comidaGato = "meio quilo";

        System.out.println(nomeCao + " tem " + idadeCao + " anos, come " + comidaCao + "de ração e late.");
        System.out.println(nomePeixe + " tem " + idadePeixe + " anos, come " + comidaPeixe + " de ração e solta bolhas.");
        System.out.println(nomeGato + " tem " + idadeGato + " anos, come " + comidaGato + " de ração e mia.");
    }
}
