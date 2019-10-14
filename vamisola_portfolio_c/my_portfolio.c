#include <stdio.h>
#include <string.h>

#define NUMBER_OF_STRING 4
#define MAX_STRING_SIZE 40

void print_array(const char arr[NUMBER_OF_STRING][MAX_STRING_SIZE])
{
    for (int i = 0; i < NUMBER_OF_STRING; i++)
    {
        printf("'%s' \n", arr[i]);
    }
}

int main()
{
    char name = "Vina Compson";
    char skills[NUMBER_OF_STRING][MAX_STRING_SIZE] =
        {"Web development",
         "Problem Solving",
         "Self-Learner"};
    char hobbies[NUMBER_OF_STRING][MAX_STRING_SIZE] =
        {"playing guitar",
         "playing video games",
         "watching Sci-Fi TV Shows",
         "playing with our dog"};

    printf("------------------------------");
    printf("MY PORTFOLIO");
    printf("------------------------------");
    printf("Name: %s\n", name);
    printf("Skills:\n");
    print_array(skills);
    printf("My hobbies:\n");
    print_array(hobbies);

    return 0;
}