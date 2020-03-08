import java.util.*;
import java.lang.*;
import java.io.*;

class MySolution{
        public static void main(String[] args) throws java.lang.Exception{
                BufferedReader objReader = new BufferedReader(new FileReader("../../testCases/t1/t1_5.txt"));
                String str1 = objReader.readLine();
                String[] strs1 = str1.split(" ");
		String str2 = objReader.readLine();
                String[] strs2 = str2.split(" ");

                StringBuilder sb = new StringBuilder();

                FileWriter writer = new FileWriter("../../Outputs/o1/o1_5.txt");  
                PrintWriter buffer = new PrintWriter(writer);

		int alice = 0;
		int bob = 0;

		for(int i=0;i<strs1.length;i++){
			int ele1 = Integer.parseInt(strs1[i]);
			int ele2 = Integer.parseInt(strs2[i]);
                        if(ele1 > ele2){
                                alice++;
                        }
			else if(ele1 < ele2){
                        	bob++;
			}
                }

		buffer.print(alice+" "+bob);
                buffer.close();
        }
}

