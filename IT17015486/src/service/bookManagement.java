package service;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import model.book;
import util.DBConnect;

public class bookManagement {

	public void addBookDetails(book book) {

		Connection connection;
		PreparedStatement preparedStatement;
		try {
			connection = (Connection) DBConnect.getDBConnection();

			preparedStatement = (PreparedStatement) connection
					.prepareStatement("insert into books (name,author,category,price) values (?, ?,?,?,?)");
			preparedStatement.setString(1, book.getName());
			preparedStatement.setString(2, book.getAuthor());
			preparedStatement.setString(3, book.getCategory());
			preparedStatement.setString(4, book.getPrice());

			preparedStatement.execute();
			// connection.commit();
			preparedStatement.close();
			connection.close();
		} catch (Exception e) {

			System.out.println(e.getMessage());
		}
	}
}
