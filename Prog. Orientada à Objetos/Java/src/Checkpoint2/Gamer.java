package Checkpoint2;

import java.util.UUID;

class Gamer extends Usuario {
    protected Gamer(String nome, String email, String senha, String nasc, String country, boolean assinatura, boolean pagamento, UUID uuid) {
        super(nome, email, senha, nasc, country, assinatura = false, pagamento, uuid);
    }

    protected void selecionarJogoLancado(Lancado jogo) {
        System.out.println(jogo.acessarTitulo() + " foi selecionado.");
    }

    @Override
    protected boolean acessarAssinatura() {
        return super.acessarAssinatura();
    }
}


