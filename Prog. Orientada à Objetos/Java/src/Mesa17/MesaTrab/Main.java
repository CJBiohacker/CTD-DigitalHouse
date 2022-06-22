package Mesa17.MesaTrab;

import java.util.Calendar;
import java.util.Date;

class Main {
    public static void main(String[] args) throws CustomDataException {
        Paciente paciente = new Paciente("Juan","Perez","12345",
                new Date(28, Calendar.JUNE,2022));
        System.out.println(paciente.getDataInternacao());

        try {
            paciente.darAlta(new Date(10, Calendar.DECEMBER,2022));
        } catch (CustomDataException e) {
            System.err.println(e.toString());
        }
    }
}
