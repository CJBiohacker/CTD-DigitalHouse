package Aula4.Integradora2;

interface IGradeDeFilmes {
    Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}
