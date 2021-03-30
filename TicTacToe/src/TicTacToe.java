import java.util.Random;
import java.util.Scanner;

public class TicTacToe {
    public static void main(String[] args) {
        // Global variables
        int playerChoice; // Player = X, Computer = O
        Random random = new Random(); // For implementing random order of play.
        // (i.e. Player first or computer first).
        boolean endGame = false;

        // Scanner will retrieve user input.
        Scanner scan = new Scanner(System.in);

        // Playable positions: gameBoard[0,2,or 4][0,2,or 4] --> i.e. gameBoard[2][4]
        char[][] gameBoard = {  {' ', '|', ' ', '|', ' '},
                                {'-', '+', '-', '+', '-'},
                                {' ', '|', ' ', '|', ' '},
                                {'-', '+', '-', '+', '-'},
                                {' ', '|', ' ', '|', ' '}   };
        printBoard(gameBoard);

        // Beginning of main program.
        while (!endGame) {
            // Player's turn.
            System.out.println("Choose a playable position (1-9): ");
            playerChoice = scan.nextInt(); // User enters number position within range.
            playerTurn(playerChoice, gameBoard);

            endGame = checkWin(gameBoard);

            // Computer's turn.
            if (!endGame) {
                computerTurn(gameBoard);
            }
            else {
                break;
            }

            // Checks if there is a win, and if so, ends the game.
            endGame = checkWin(gameBoard);
        }
        System.exit(0);
    }

    public static void printBoard(char[][] gameBoard) {
        for (char[] row : gameBoard) {
            for (char rowPos : row) {
                System.out.print(rowPos);
            }
            System.out.println();
        }
    }

    public static boolean checkPos(int chosenPos, char[][] gameBoard) {
        // Playable positions: gameBoard[0,2,or 4][0,2,or 4] --> i.e. gameBoard[2][4]
        // gameBoard[row][column]
        return switch (chosenPos) {
            case 1 -> gameBoard[0][0] == ' ';
            case 2 -> gameBoard[0][2] == ' ';
            case 3 -> gameBoard[0][4] == ' ';
            case 4 -> gameBoard[2][0] == ' ';
            case 5 -> gameBoard[2][2] == ' ';
            case 6 -> gameBoard[2][4] == ' ';
            case 7 -> gameBoard[4][0] == ' ';
            case 8 -> gameBoard[4][2] == ' ';
            case 9 -> gameBoard[4][4] == ' ';
            default -> true;
        };
    }

    public static void updatePlayerPos(int playerChoice, char[][] gameBoard) {
        switch (playerChoice) {
            case 1 -> gameBoard[0][0] = 'X';
            case 2 -> gameBoard[0][2] = 'X';
            case 3 -> gameBoard[0][4] = 'X';
            case 4 -> gameBoard[2][0] = 'X';
            case 5 -> gameBoard[2][2] = 'X';
            case 6 -> gameBoard[2][4] = 'X';
            case 7 -> gameBoard[4][0] = 'X';
            case 8 -> gameBoard[4][2] = 'X';
            case 9 -> gameBoard[4][4] = 'X';
        }
    }

    public static void updateComputerPos(int computerChoice, char[][] gameBoard) {
        switch (computerChoice) {
            case 1 -> gameBoard[0][0] = 'O';
            case 2 -> gameBoard[0][2] = 'O';
            case 3 -> gameBoard[0][4] = 'O';
            case 4 -> gameBoard[2][0] = 'O';
            case 5 -> gameBoard[2][2] = 'O';
            case 6 -> gameBoard[2][4] = 'O';
            case 7 -> gameBoard[4][0] = 'O';
            case 8 -> gameBoard[4][2] = 'O';
            case 9 -> gameBoard[4][4] = 'O';
        }
    }

    public static boolean checkWin(char[][] gameBoard) {
        // Check if Player or Computer won.
        if ((gameBoard[0][0] == 'X' && gameBoard[2][2] == 'X' && gameBoard[4][4] == 'X') ||
                (gameBoard[0][4] == 'X' && gameBoard[2][2] == 'X' && gameBoard[4][0] == 'X') ||
                (gameBoard[0][0] == 'X' && gameBoard[0][2] == 'X' && gameBoard[0][4] == 'X') ||
                (gameBoard[2][0] == 'X' && gameBoard[2][2] == 'X' && gameBoard[2][4] == 'X') ||
                (gameBoard[4][0] == 'X' && gameBoard[4][2] == 'X' && gameBoard[4][4] == 'X') ||
                (gameBoard[0][0] == 'X' && gameBoard[2][0] == 'X' && gameBoard[4][0] == 'X') ||
                (gameBoard[0][2] == 'X' && gameBoard[2][2] == 'X' && gameBoard[4][2] == 'X') ||
                (gameBoard[0][4] == 'X' && gameBoard[2][4] == 'X' && gameBoard[4][4] == 'X')) {
            System.out.println("You win!");
            return true;
        }
        else if ((gameBoard[0][0] == 'O' && gameBoard[2][2] == 'O' && gameBoard[4][4] == 'O') ||
                (gameBoard[0][4] == 'O' && gameBoard[2][2] == 'O' && gameBoard[4][0] == 'O') ||
                (gameBoard[0][0] == 'O' && gameBoard[0][2] == 'O' && gameBoard[0][4] == 'O') ||
                (gameBoard[2][0] == 'O' && gameBoard[2][2] == 'O' && gameBoard[2][4] == 'O') ||
                (gameBoard[4][0] == 'O' && gameBoard[4][2] == 'O' && gameBoard[4][4] == 'O') ||
                (gameBoard[0][0] == 'O' && gameBoard[2][0] == 'O' && gameBoard[4][0] == 'O') ||
                (gameBoard[0][2] == 'O' && gameBoard[2][2] == 'O' && gameBoard[4][2] == 'O') ||
                (gameBoard[0][4] == 'O' && gameBoard[2][4] == 'O' && gameBoard[4][4] == 'O')) {
            System.out.println("The computer wins!");
            return true;
        }
        return false;
    }

    public static void playerTurn(int playerChoice, char[][] gameBoard) {
        Scanner scan = new Scanner(System.in);
        boolean posOpen;

        while (playerChoice < 1 || playerChoice > 9) {
            System.out.println("Invalid position, select another position:");
            playerChoice = scan.nextInt();
        }

        posOpen = checkPos(playerChoice, gameBoard); // Checks if position is within range or open.

        while (!posOpen) {
            System.out.println("Position taken, select another position:");
            playerChoice = scan.nextInt();
            posOpen = checkPos(playerChoice, gameBoard);
        }

        updatePlayerPos(playerChoice, gameBoard); // Updates position with selected choice.
        printBoard(gameBoard);
    }

    public static void computerTurn(char[][] gameBoard) {
        Random random = new Random();
        int computerChoice = random.nextInt(9-1) + 1;
        boolean posOpen;
        posOpen = checkPos(computerChoice, gameBoard); // Checks if position is within range or open.
        while (!posOpen) {
            computerChoice = random.nextInt(9-1) + 1;
            posOpen = checkPos(computerChoice, gameBoard);
        }
        System.out.println("The computer chose " + computerChoice + ".");
        updateComputerPos(computerChoice, gameBoard); // Updates position with selected choice.
        printBoard(gameBoard);
    }
}
