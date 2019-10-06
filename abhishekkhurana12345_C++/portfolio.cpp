#include <bits/stdc++.h>

using namespace std;
int main(){
	string name = "Abhishek khurana";
	string title = "BITsian";
	vector<string> skill;
	skill.push_back("ctrl c + ctrl v");
	skill.push_back("searching stackOverFlow");
	skill.push_back("LITE lena");
	vector<string>hobbies;
	hobbies.push_back("sleeping");
	hobbies.push_back("eating");
	hobbies.push_back("coding");

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
	cout << endl;
	return 0;
}