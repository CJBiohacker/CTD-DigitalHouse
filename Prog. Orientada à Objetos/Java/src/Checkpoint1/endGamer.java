package Checkpoint1;

import org.jetbrains.annotations.NotNull;

import java.util.UUID;

class endGamer extends Usuario {

    protected endGamer(String nome, String email, String senha, String nasc, String country, boolean assinatura, boolean pagamento, UUID uuid) {
        super(nome, email, senha, nasc, country, assinatura, pagamento, uuid);
    }

    protected String selecionarJogoLancado(@NotNull Lancado jogo) {
        return jogo.acessarTitulo() + " foi selecionado.";
    }

    protected String selecionarJogoDesenvolvimento(@NotNull Desenvolvimento jogo) {
        return jogo.acessarTitulo() + " foi selecionado.";
    }
}
