package Aula19.ExerGuiado;

class FabricaEmpregado {

    private static FabricaEmpregado fabrica;

    private FabricaEmpregado() {
    }

    protected static FabricaEmpregado instanciar() {
        if (fabrica == null) {
            fabrica = new FabricaEmpregado();
        }
        return fabrica;
    }

    protected Empregado criarEmpregado(String classeEmpregado) {
        if (classeEmpregado.equals("EMP-INT")) {
            return new EmpregadoRelacaoDep();
        } else if (classeEmpregado.equals("EMP-EXT")) {
            return new EmpregadoContratado();
        } else {
            return null;
        }
    }
}
