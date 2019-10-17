
package CompetitiveCoding;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparatorExample {
 
    public static void main(String[] args) {
        
        //Student Class
        List<Student> list = new ArrayList<>();
        list.add(new Student(4, "Taher"));
        list.add(new Student(3, "Kabir"));
        list.add(new Student(1, "Reyansh"));
        list.add(new Student(2, "Aryan"));
        
        
        // Comparable Interface
        System.out.println("Students before sort");
        for(Student s : list){
            System.out.println(s.toString());
        }
        Collections.sort(list);
        System.out.println("Students after sort");
        for(Student s : list){
            System.out.println(s.toString());
        }
        
        //Employee Class
        
        List<Employee> list2 = new ArrayList<>();
        list2.add(new Employee(101, "Devdas"));
        list2.add(new Employee(104, "Chetak"));
        list2.add(new Employee(103, "Bakul"));
        list2.add(new Employee(102, "Aamir"));
        
        //Comparator Interface/Method
        //Employee Class
        
        System.out.println("\n\nEmployees before sort");
        for(Employee s : list2){
            System.out.println(s.toString());
        }
        Comparator<Employee> com = new Comparator<Employee>() {
            @Override
            public int compare(Employee e1, Employee e2) {
                return e1.getName().compareTo(e2.getName());
            }
        };
        
        Collections.sort(list2 , com);
        System.out.println("Employees after sort");
        for(Employee s : list2){
            System.out.println(s.toString());
        }
        
    }
    
}

class Student implements Comparable<Student> {
    protected int id;
    protected String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" + "id=" + id + ", name=" + name + '}';
    }

    @Override
    public int compareTo(Student s) {
        if(this.getId() > s.getId())
            return 1;
        else
           return -1;
    }
    
}

class Employee extends Student {

    public Employee(int id, String name) {
        super(id, name);
    }

}