package Checkpoint1;

class Jogo {
    private String titulo, genero, dev, distro, dataLanc;
    private boolean multiplayer;

    protected Jogo(String titulo, String genero, String dev, String distro, String dataLanc, boolean multiplayer) {
        this.titulo = titulo;
        this.genero = genero;
        this.dev = dev;
        this.distro = distro;
        this.dataLanc = dataLanc;
        this.multiplayer = multiplayer;
    }

    protected String acessarTitulo() {
        return titulo;
    }

    public boolean statusMultiplayer() {
        return multiplayer;
    }
}
