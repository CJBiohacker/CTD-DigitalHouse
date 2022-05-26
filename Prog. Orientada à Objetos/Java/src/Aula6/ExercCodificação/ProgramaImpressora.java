package Aula6.ExercCodificação;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

class ProgramaImpressora {
    public static void main(String[] args) {

        LocalDate dataFab1 = LocalDate.of(2018,3,17);
        DateTimeFormatter formatoBr = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String dataFabFormatada1 = dataFab1.format(formatoBr);

        Impressora canon = new Impressora("PIXMA MP495", "USB + Wifi", dataFab1, 30);

        canon.imprimir("Impressão da página de Teste da impressora PIXMA MP495");
    }
}
