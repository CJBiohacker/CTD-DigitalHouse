package Aula4.Integradora2;

class Programa {
    public static void main(String[] args) {

        GradeDeFilmesProxy proxy = new GradeDeFilmesProxy(new GradeDeFilmes());

        proxy.setIp(new Ip(201,23,23,25));

        try {
            System.out.println(proxy.getFilme("Tropa de Elite").getLink());
            System.out.println("Acesso do filme liberado!");
        }
        catch (FilmeNaoHabilitadoException error){
            System.out.println(error.getMessage());
        }
    }
}
