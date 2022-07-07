package Checkpoint2;

import java.util.UUID;

abstract class Usuario {
    private String nome, email, senha, nasc, country;
    private boolean assinatura, pagamento;
    private UUID uuid;

    protected Usuario(String nome, String email, String senha, String nasc, String country, boolean assinatura, boolean pagamento, UUID uuid) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.nasc = nasc;
        this.country = country;
        this.assinatura = assinatura;
        this.pagamento = pagamento;
        this.uuid = uuid;
    }

    protected String acessarNome() {
        return nome;
    }

    protected boolean acessarAssinatura() {
        return assinatura;
    }
    protected void mudarAssinatura(boolean valor) {
        this.assinatura = valor;        // Gamer = false / endGamer = true
    }

    protected String mudarPagamento(boolean valor) {
        this.assinatura = valor;        // Crédito = true e Boleto = false
        if (valor) {
            return "Crédito";
        } else {
            return "Boleto";
        }
    }
}
