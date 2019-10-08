package main

import "fmt"

func main() {
  var name string = "Akhil Surendran"
  var title string = "Computer Science Undergraduate"
  var skills [2]string
  skills[0] = "PHP"
  skills[1] = "C++"
  fmt.Println("Name:",name)
  fmt.Println("Title:",title)
  fmt.Println("I have experience with the following programing languages:",skills[0],",",skills[1])
}