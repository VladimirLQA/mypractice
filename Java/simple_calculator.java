import java.util.Scanner;
public class simple_calculator {   
    public static void main(String[] args) {
            char operator;
            Double num1, num2, result;
            Scanner input = new Scanner(System.in);
            
            System.out.println("Choose an operator: +, -, *, or /");
            operator = input.next().charAt(0);
            System.out.println("Enter first number");
            num1 = input.nextDouble();
            System.out.println("Enter second number");
            num2 = input.nextDouble();

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    System.out.println("Result = " + result);
                    break;

                case '-':
                    result = num1 - num2;
                    System.out.println("Result = " + result);
                    break;

                case '*':
                    result = num1 * num2;
                    System.out.println("Result = " + result);
                    break;

                case '/':
                    result = num1 / num2;
                    System.out.println("Result = " + result);
                    break;

                default:
                    System.out.println("Invalid operator!");
                    break;
            }
        input.close();
    }
}