package Integradora6;

import java.io.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Funcionario func1 = new Funcionario("João", "Jonas", "12345678963", 2800.70);
        Funcionario func2 = new Funcionario("Alexandre", "Alério", "12344578963", 3142.35);
        Funcionario func3 = new Funcionario("Neuza", "Nazarena", "14876578963", 14360.85);
        Funcionario func4 = new Funcionario("Giovana", "Grande", "14442578963", 1400.15);

        ArrayList<Funcionario> ListaDeFuncionarios = new ArrayList<>();
        ListaDeFuncionarios.add(func1);
        ListaDeFuncionarios.add(func2);
        ListaDeFuncionarios.add(func3);
        ListaDeFuncionarios.add(func4);

        Empresa revoltadosInc = new Empresa("89182142001148", "Revoltados Inc.", ListaDeFuncionarios);


        try {
            FileOutputStream funcFOS = new FileOutputStream("Funcionarios.Empresa");
            ObjectOutputStream funcOOS = new ObjectOutputStream(funcFOS);

            funcOOS.writeObject(revoltadosInc);
            funcOOS.close();

            FileInputStream funcFIS = new FileInputStream("Funcionarios");
            ObjectInputStream funcOIS = new ObjectInputStream(funcFIS);
            ArrayList<Funcionario> funcionariosListaEmpresa;

            for (int i = 0; i < 5 ; i++) {
                System.out.print("Funcionario ==> ");
                System.out.println(i + 1);
                funcionariosListaEmpresa = (ArrayList<Funcionario>) funcOIS.readObject();

                for (Funcionario func:funcionariosListaEmpresa) {
                    System.out.println(func);
                }
            }
        }
        catch (FileNotFoundException e){
            e.printStackTrace();
        }
    }
}
