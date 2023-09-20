import java.util.Scanner;

public class BaseConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the number to be converted
        System.out.print("Enter the number: ");
        int number = scanner.nextInt();

        // Get the base of the number
        System.out.print("Enter the base of the number: ");
        int base = scanner.nextInt();

        // Get the new base to convert to
        System.out.print("Enter the new base: ");
        int newBase = scanner.nextInt();

        // Convert the number to decimal
        int decimalNumber = convertToDecimal(number, base);

        // Convert the decimal number to the new base
        String newNumber = convertToBase(decimalNumber, newBase);

        // Print the result
        System.out.println("Number in base " + newBase + ": " + newNumber);
    }

    // Method to convert a number to decimal
    public static int convertToDecimal(int number, int base) {
        int decimalNumber = 0;
        int power = 0;

        while (number > 0) {
            int digit = number % 10;
            decimalNumber += digit * Math.pow(base, power);
            number /= 10;
            power++;
        }

        return decimalNumber;
    }

    // Method to convert a decimal number to a new base
    public static String convertToBase(int decimalNumber, int base) {
        StringBuilder newNumber = new StringBuilder();

        while (decimalNumber > 0) {
            int digit = decimalNumber % base;
            newNumber.insert(0, digit);
            decimalNumber /= base;
        }

        return newNumber.toString();
    }
}