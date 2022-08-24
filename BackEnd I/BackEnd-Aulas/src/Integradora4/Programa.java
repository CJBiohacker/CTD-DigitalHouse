package Integradora4;

import org.apache.log4j.Logger;
import org.h2.jdbc.JdbcSQLIntegrityConstraintViolationException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Programa {
    private static final Logger logger = Logger.getLogger(Programa.class);
    private static final String createTable = "DROP TABLE IF EXISTS Usuario; CREATE TABLE Usuario "
            + "("
            + "ID INT PRIMARY KEY,"
            + "Primeiro_Nome varchar(100) NOT NULL, "
            + "Sobrenome varchar(100) NOT NULL, "
            + "Email varchar(100) NOT NULL, "
            + "Idade INT NOT NULL "
            + ")";
    private static final String insert1 =  "INSERT INTO Usuario VALUES (1, 'John', 'Dee','johndee@email.com', 88)";
    private static final String insert2 =  "INSERT INTO Usuario VALUES (2, 'Oneiros', 'Sand','sandman@email.com', 5000)";
    private static final String insert3 =  "INSERT INTO Usuario VALUES (1, 'Valeria', 'Laguna','valagun@email.com', 45)";
    private static final String deleteById =  "DELETE FROM Usuario WHERE ID=1";
    private static final String deleteByEmail =  "DELETE FROM Usuario WHERE Email='johndee@email.com'";
    private static final String updateById =  "UPDATE Usuario SET Email = 'morpheus@email.com' WHERE ID=2";
    private static final String findById = "SELECT * FROM USUARIO WHERE ID=2";

    public static void main(String[] args) throws Exception {
        Connection connection = null;
        try {
            connection = getConnection();
            Statement statement = connection.createStatement();

            statement.execute(createTable);
            logger.info("Tabela Usuario criada");

            statement.execute(insert1);
            logger.info("Usuário 1 inserido!");

            statement.execute(insert2);
            logger.info("Usuário 2 inserido!");

            try {
                statement.execute(insert3);
                logger.info("Usuário 3 inserido!");
            } catch (JdbcSQLIntegrityConstraintViolationException ignore){
                logger.error("Primary Key repitida!");
            }

            statement.executeUpdate(updateById);
            ResultSet busca = statement.executeQuery(findById);

            while (busca.next()){
                logger.info( "\nId: " + busca.getInt(1)
                        + "\n Nome: " + busca.getString(2)
                        + "\n Sobrenome: " + busca.getString(3)
                        + "\n Email: " + busca.getString(4)
                        +"\n Idade: " +  busca.getInt(5));
            }

            logger.debug("Usuário 2 atualizado" +  busca );

            statement.executeUpdate(deleteById);
            logger.info("Usuário deletado pelo id");

            statement.executeUpdate(deleteByEmail);
            logger.info("Usuário deletado pelo email");

        } catch (Exception ex){
            logger.error(ex.getMessage());

        } finally {
            if(connection != null){
                connection.close();
            }
        }
    }
    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/test", "root", "");
    }
}
