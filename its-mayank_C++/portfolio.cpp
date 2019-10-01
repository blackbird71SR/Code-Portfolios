#include <bits/stdc++.h>

using namespace std;
int main(){
string name = "Mayank Maheshwari";
string title = "Pre-final Year Undergrad at IIT Jodhpur";
vector<string> skill;
skill.push_back("Deep Learning");
skill.push_back("Data Structures and Algorithms");
skill.push_back("Data Analyst");
vector<string>hobbies;
hobbies.push_back("Keyboard Playing");
hobbies.push_back("Music and Dance");
hobbies.push_back("Cricket");

cout << name << endl;
cout << endl;
cout << title << endl;
cout << endl;
cout << "Skills:" << endl;
for(int i=0;i<skill.size();i++){
cout << skill[i] << endl;
}
cout << endl;
cout << "Hobbies:" << endl;
for(int i=0;i<hobbies.size();i++){
cout << hobbies[i] << endl;
}
return 0;
}