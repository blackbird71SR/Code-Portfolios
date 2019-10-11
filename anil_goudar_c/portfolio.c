#include<stdio.h>

int main() {
    char *name = "Anilkumar C Goudar";
    char *title = "Final Year Post Graduate in NIT Delhi";
    char *(skill)[40] = {"Web Developement", "Data Structure and Algorithms", "Python", "Machine Learning Starter", ""}, **nskill;
    char *(hobbies)[10] = {"Music", "Video Game", "Volleyball", ""}, **nhobbies;
    nskill = skill;
    nhobbies = hobbies;
    printf("\n");
    printf("Name: %s\n", name);
    printf("Title: %s\n", title);
    printf("\n");
    printf("Skills: \n");
    while(*nskill != "") {
        printf("     %s\n", *nskill++);
    }
    printf("\n");
    printf("Hobbies: \n");
    while(*nhobbies != "") {
        printf("      %s\n", *nhobbies++);
    }
    return 0;
}