import java.util.*;
import java.lang.*;
import java.io.*;

class MySolution{
	public static void main(String[] args) throws java.lang.Exception{
		BufferedReader objReader = new BufferedReader(new FileReader("../testCases/t1/t1_1.txt"));
		String str1 = objReader.readLine();
		int n = Integer.parseInt(str1);
		StringBuilder sb = new StringBuilder();

		FileWriter writer = new FileWriter("../Outputs/o1/o1_1.txt");  
	        PrintWriter buffer = new PrintWriter(writer);

		for(int i=1;i<=n;i++){
			if(i == n){
				buffer.print(i);
				break;
			}
			buffer.print(i+"\n");
		}
		buffer.close();
	}
}

