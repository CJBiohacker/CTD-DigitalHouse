package Checkpoint2;

import java.util.UUID;

class endGamer extends Usuario {

    protected endGamer(String nome, String email, String senha, String nasc, String country, boolean assinatura, boolean pagamento, UUID uuid) {
        super(nome, email, senha, nasc, country, assinatura, pagamento, uuid);
    }

    protected String selecionarJogoLancado(Lancado jogo) {
        return jogo.acessarTitulo() + " foi selecionado.";
    }

    protected String selecionarJogoDesenvolvimento(Desenvolvimento jogo) {
        return jogo.acessarTitulo() + " foi selecionado.";
    }

    @Override
    protected String acessarNome() {
        return super.acessarNome();
    }

    @Override
    protected boolean acessarAssinatura() {
        return super.acessarAssinatura();
    }
}
