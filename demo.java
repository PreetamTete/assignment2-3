import java.util.Scanner;

public class demo
{
    public static void main(String args[]) {
        Scanner inputdata = new Scanner(System.in);

        System.out.println("Enter a sentence");
        String sentence = inputdata.nextLine();
        System.out.println("Enter a letter");
        String letter = inputdata.nextLine();


        int index=sentence.indexOf(letter);

        if(index==-1)
        {
            System.out.println("The letter does not exist in the sentence");

        }
        else
        {
            System.out.println(sentence.substring(index+1, sentence.length()));
        }
        
    }
}