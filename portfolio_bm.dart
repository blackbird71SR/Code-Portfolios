void main(){
   print("*****PORTFOLIO IN DART*****");
   String name = 'Bhawana Mishra';
   String yr = '3rd Year';
   var hobby = new List(2);
   var techskill = {0:'Web dev', 1:'Intermediate coding'};
   hobby[0]="basketball";
   hobby[1]="sketching";
   print("Name: " + name);
   print("Year: " + yr);
   print("My Hobbies : Playing "+ hobby[0] + " and I also like to " + hobby[1]);
   print("My Skills:");
   for (var i = 0; i < 2; i++)
    print("* "+ techskill[i]);
}
