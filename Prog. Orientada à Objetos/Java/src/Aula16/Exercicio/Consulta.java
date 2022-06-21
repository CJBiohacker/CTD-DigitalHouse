package Aula16.Exercicio;

import java.time.LocalDateTime;

class Consulta {
    private String especialidade;
    private LocalDateTime consulta;
    private boolean primeiraConsulta;

    public Consulta(String especialidade, LocalDateTime consulta, boolean primeiraConsulta) {
        this.especialidade = especialidade;
        this.consulta = consulta;
        this.primeiraConsulta = primeiraConsulta;
    }

    protected String getEspecialidade() {
        return especialidade;
    }

    protected LocalDateTime getConsulta() {
        return consulta;
    }

    protected boolean isPrimeiraConsulta() {
        return primeiraConsulta;
    }

    protected String statusConsulta() {
        if (isPrimeiraConsulta()) {
            return ("Paciente novo, nesta especialidade.");
        } else  {
            return ("Paciente conhecido.");
        }
    }

    public static void main(String[] args) {
        LocalDateTime dataConsulta = LocalDateTime.of(2022, 6,23,9,25);
        Consulta clinicoGeral = new Consulta("Clínico Geral", dataConsulta, false);

        System.out.println(clinicoGeral.getConsulta());
        System.out.println(clinicoGeral.getEspecialidade());
        System.out.println(clinicoGeral.statusConsulta());
    }
}
