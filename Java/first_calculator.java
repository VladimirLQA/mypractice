public class first_calculator {
    
    static int plus (int a, int b) {
        return a+b;
    }
    static int minus(int a, int b) {
        return a - b;
    }
    static int multiplication(int a, int b) {
        return a*b;
    }
    static float division(float a, int b) {
        return (a/b);
    }
    public static void main(String[] args) {
        int first = 111;
        int second = 13;
        System.out.println("Result = " + plus(first, second));
        System.out.println("Result = " + minus(first, second));
        System.out.println("Result = " + multiplication(first, second));
        System.out.println("Result = " + division(first, second));
    }
}