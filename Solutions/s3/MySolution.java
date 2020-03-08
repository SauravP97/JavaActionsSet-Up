import java.util.*;
import java.lang.*;
import java.io.*;

class MySolution{
        public static void main(String[] args) throws java.lang.Exception{
                BufferedReader objReader = new BufferedReader(new FileReader("../../testCases/t3/t3_6.txt"));
                String str1 = objReader.readLine();
                String[] strs1 = str1.split(" ");

                StringBuilder sb = new StringBuilder();

                FileWriter writer = new FileWriter("../../Outputs/o3/o3_6.txt");  
                PrintWriter buffer = new PrintWriter(writer);

                long maxSum = 0;
                long minSum = 0;

		for(int i=0;i<5;i++){
			int ele = Integer.parseInt(strs1[i]);
			if(i != 0){
				maxSum += (long)ele;
			}
			if(i != 4){
				minSum += (long)ele;
			}
		}

                buffer.print(minSum+" "+maxSum);
                buffer.close();
        }
}

