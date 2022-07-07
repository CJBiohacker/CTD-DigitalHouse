// CTD - TURMA 5 - CARLOS DE LIMA JUNOR E HELOÍSA MEISTER

package Checkpoint2;

import java.util.ArrayList;
import java.util.UUID;

class Plataforma {

    public static void main(String[] args) {
//      Caso 1 - Usuário Gamer selecionando um Jogo Lançado
        Gamer carlos = new Gamer("Carlos", "carlos@gmail.com", "123456", "12/03/1990",
                "Brasil",false,false, UUID.randomUUID());
        Lancado lastOfUs2 = new Lancado("Last of Us 2", "Ação", "Naughty Dog", "Sony",
                "19/06/2020", true);

        System.out.println("Olá " + carlos.acessarNome() + " ! Seja Bem vindo à plataforma EndGame." +
                " Selecione um dos jogos do catálogo habilitados para sua assinatura");
        System.out.println(lastOfUs2.acessarTitulo() + " selecionado. Inicializando...");

//      Caso 2 - Usuário endGamer selecionando um Jogo em Desenvolvimento. (Modificando status do jogo)
        endGamer cj = new endGamer("CJ","carlos@gmail.com", "123456", "12/03/1990",
                "Brasil",true, true, UUID.randomUUID());
        Desenvolvimento valHeim = new Desenvolvimento("Valheim", "Survival", "Iron Gate AB",
                "Coffe Stain Publishing", "02/02/2021", true, false);

        System.out.println("Olá " + cj.acessarNome() + " ! Seja Bem vindo à plataforma EndGame." +
                " Selecione um dos jogos do catálogo habilitados para sua assinatura");
        System.out.println("Entrando na aba de Jogos em Desenvolvimento.");
        System.out.println(valHeim.acessarTitulo() + " selecionado. Inicializando... " +
                "Verificando o status de Desenvolvimento... " +
                valHeim.statusDesenvolvimento(valHeim.acessarStatusDev()));
        System.out.println("Este jogo contém bugs e possíveis erros, deseja jogá-lo assim mesmo ?!");
        System.out.println("Ok ! Inicializando Valheilm.");

        System.out.println("Atualizando catálogo de jogos em Desenvolvimento. Você jogou Valheim recentemente !" +
                " Na última atualização, ele saiu de Alpha para a versão Beta." +
                " Você deseja testar a nova atualização estável do jogo ?!" +
                " Ok ! Inicializando Valheim versão Beta.");

        System.out.println(cj.selecionarJogoDesenvolvimento(valHeim));
        System.out.println(cj.selecionarJogoLancado(lastOfUs2));

//      Caso 3 - Usuário Gamer adicionando jogos na biblioteca e acessando a Lista de jogos atuais (Collection ArrayList de jogos) e testando uma Exception para Gamers. (Gamers não podem adicionar jogos em Desenvolvimento)
        BibliotecaJogos bibliotecaCarlos = new BibliotecaJogos(new ArrayList<Jogo>());
        Lancado lastOfUs = new Lancado("Last of Us", "Ação", "Naughty Dog", "Sony",
                "14/06/2013", false);
        Lancado zeldaBreath = new Lancado("The Legend of Zelda: Breath of the Wild", "Aventura", "Nintendo Entertainment Planning & Development", "Nintendo",
                "03/03/2017", false);

        System.out.println("Olá " + carlos.acessarNome() + " ! Seja Bem vindo à plataforma EndGame." +
                " Você é um Usuário Gamer. O que você deseja acessar ?!");
        System.out.println("Entrando na Loja Virtual. Você deseja comprar algum jogo ?");

        try {
            lastOfUs.alertaUsuarioGamer();
            bibliotecaCarlos.adicionarJogo(lastOfUs);
            lastOfUs2.alertaUsuarioGamer();
            bibliotecaCarlos.adicionarJogo(lastOfUs2);
            zeldaBreath.alertaUsuarioGamer();
            bibliotecaCarlos.adicionarJogo(zeldaBreath);
        } catch (GamerException e) {
            System.err.println(e.toString());
        }
        System.out.println("Adicionando " +  lastOfUs2.acessarTitulo() + ", " + lastOfUs.acessarTitulo() + ", " + zeldaBreath.acessarTitulo() + " na biblioteca.");

        // "Forçando" uma tentativa de adicionar um jogo em Desenvolvimento à Biblioteca do Usuário Gamer Carlos.
        // Ao utilizar o método alertaUsuarioGamer para o jogo Valheim, o método lança uma Exception pois jogos em desenvolvimento não são permitidos para usuários do tipo Gamer
        try {
            valHeim.alertaUsuarioGamer();
            bibliotecaCarlos.adicionarJogo(valHeim);
        } catch (GamerException e) {
            System.err.println(e.toString());
        }

        System.out.println("Adicionando " + valHeim.acessarTitulo() + " na biblioteca.");

        System.out.println("Biblioteca de jogos disponível. Acessando a biblioteca atualizada:");
        bibliotecaCarlos.listarJogos();
    }
}
