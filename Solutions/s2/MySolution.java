import java.util.*;
import java.lang.*;
import java.io.*;

class MySolution{
        public static void main(String[] args) throws java.lang.Exception{
                BufferedReader objReader = new BufferedReader(new FileReader("../../testCases/t2/t2_3.txt"));
                String str1 = objReader.readLine();
                String str2 = objReader.readLine();

                StringBuilder sb = new StringBuilder();

                FileWriter writer = new FileWriter("../../Outputs/o2/o2_3.txt");  
                PrintWriter buffer = new PrintWriter(writer);

                int anagram = 1;

		if(str1.length() != str2.length()){
			buffer.print("false");
		}
		else{
			int[] fre = new int[26];
                	for(int i=0;i<str1.length();i++){
                        	int asc = (int)str1.charAt(i) - 97;
				fre[asc]++;
                	}
			for(int i=0;i<str2.length();i++){
                                int asc = (int)str2.charAt(i) - 97;
                                fre[asc]--;
                        }
			for(int i=0;i<26;i++){
				if(fre[i]!=0){
					anagram = 0;
				}
			}
			if(anagram == 1){
                		buffer.print("true");
			}
			else{
				buffer.print("false");
			}
		}
                buffer.close();
        }
}

