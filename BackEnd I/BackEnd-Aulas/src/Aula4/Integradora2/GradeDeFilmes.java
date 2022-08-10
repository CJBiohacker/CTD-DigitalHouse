package Aula4.Integradora2;

class GradeDeFilmes implements IGradeDeFilmes {

    @Override
    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException {
        Filme f = switch (nomeDoFilme) {
            case "O Som ao Redor" -> new Filme("O Som ao Redor", "Brasil", "www.netflix.com");
            case "Central do Brasil" -> new Filme("Central do Brasil", "Brasil", "www.netflix.com");
            case "Cidade de Deus" -> new Filme("Cidade de Deus", "Brasil", "www.netflix.com");
            case "Tropa de Elite" -> new Filme("Tropa de Elite", "Brasil", "www.netflix.com");
            default -> null;
        };

        return f;
    }
}
